const mysql = require('mysql2/promise');

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

    // Parse year and month parameters from the request path
    const { year, month } = event.pathParameters;

    // Set up the MySQL connection
    const connection = await mysql.createConnection({
        host: 'iimt4601proj.c2kossfof9fk.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: '12341234',
        database: 'inventory_db',
    });

    try {
        // Execute a query to fetch the monthly bestsellers
        const [rows, fields] = await connection.execute(
            `SELECT bs.*, bi.*
       FROM monthly_bestseller bs
       JOIN book_info bi ON bs.book_id = bi.book_id
       WHERE bs.year = ? AND bs.month = ?
       ORDER BY bs.quantity_sold DESC`,
            [year, month]
        );

        // Format the result as an array of book objects
        const bestsellers = rows.map(row => ({
            Year: row.year,
            Month: row.month,
            Book_id: row.book_id,
            Book_Title: row.book_title,
            Author: row.author,
            Publisher: row.publisher,
            Quantity_Sold: row.quantity_sold,
            Price: row.price,
            Genre: row.genre,
            Publication_Year: row.publication_year,
            Description: row.description,
        }));

        // Return the bestsellers as a JSON object
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                Year: year,
                Month: month,
                Bestsellers: bestsellers
            })
        };
    } catch (error) {
        console.log('Error fetching bestsellers:', error);
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
