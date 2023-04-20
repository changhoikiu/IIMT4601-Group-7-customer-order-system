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
        Book_Cover_URL: info.Book_Cover_URL,
        Selling_Price: inventory ? inventory.selling_price : null,
        In_Stock_Quantity: inventory ? inventory.in_stock_quantity : null,
        Hold_Quantity: inventory ? inventory.hold_quantity : null,
        Sold_Quantity: inventory ? inventory.sold_quantity : null,
        Last_Update_Date: inventory ? inventory.last_update : null,
    };

    return book;
};

const formBooks = (infos, inventories) => {
    const books = [];
    for (const info of infos) {
        const inventory = inventories.find(inv => inv.book_id === info.book_id);
        const book = formBook(info, inventory);
        books.push(book);
    }
    return books;
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

    // Set up the MySQL connection
    const connection = await mysql.createConnection({
        host: 'iimt4601proj.c2kossfof9fk.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: '12341234',
        database: 'inventory_db',
    });

    try {
        // Execute a query to fetch all books info
        const [bookInfoRows, bookInfoFields] = await connection.execute(
            'SELECT * FROM book_info'
        );

        // Execute a query to fetch all books inventory data
        const [bookInventoryRows, bookInventoryFields] = await connection.execute(
            'SELECT * FROM book_inventory'
        );

        // Form the book objects
        const books = formBooks(bookInfoRows, bookInventoryRows);

        // Return the book data as a JSON object
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(books)
        };
    } catch (error) {
        console.log('Error fetching books:', error);
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
