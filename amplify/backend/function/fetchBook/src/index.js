const mysql = require('mysql2/promise');

const formBook = (info, inventory) => {
    const book = {};
    book[info.book_id] = {
        Book_id: info.book_id,
        Book_Title: info.book_title,
        Author: info.author,
        Publisher: info.publisher,
        Genre: info.genre,
        ISBN: info.isbn,
        Description: info.description,
        Book_Cover_URL: info.book_cover,
        Selling_Price: inventory ? inventory.selling_price : null,
        In_Stock_Quantity: inventory ? inventory.in_stock_quantity : null,
        Hold_Quantity: inventory ? inventory.hold_quantity : null,
        Sold_Quantity: inventory ? inventory.sold_quantity : null,
        Last_Update_Date: inventory ? inventory.last_update : null,
    };

    return book;
};

exports.handler = async (event) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Check if the request is a GET request
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    // Parse the book ID from the request path
    const bookId = event.pathParameters.bookId;

    // Set up the MySQL connection
    const connection = await mysql.createConnection({
        host: 'iimt4601proj.c2kossfof9fk.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: '12341234',
        database: 'inventory_db',
    });

    try {
        // Execute a parameterized query to fetch the book info
        const [bookInfoRows, bookInfoFields] = await connection.execute(
            'SELECT * FROM book_info WHERE book_id = ?',
            [bookId]
        );

        // If no book info is found, return a 404 response
        if (bookInfoRows.length === 0) {
            return {
                statusCode: 404,
                headers,
                body: JSON.stringify({ message: 'Book not found' })
            };
        }

        // Execute a parameterized query to fetch the book inventory
        const [bookInventoryRows, bookInventoryFields] = await connection.execute(
            'SELECT selling_price, in_stock_quantity, hold_quantity, sold_quantity, last_update FROM book_inventory WHERE book_id = ?',
            [bookId]
        );

        // Form the book object
        const book = formBook(bookInfoRows[0], bookInventoryRows[0] || null);

        // Return the book data as a JSON object
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(book)
        };
    } catch (error) {
        console.log('Error fetching book:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    } finally {
        // Close the MySQL connection
        await connection.end();
    }
};
