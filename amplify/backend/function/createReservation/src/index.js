const mysql = require('mysql2/promise');

exports.handler = async (event) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Check if the request is a POST request
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    // Parse the request body JSON
    const requestBody = JSON.parse(event.body);
    const { name, email, phoneNo } = requestBody;

    // Check if the required fields are present
    if (!name || !email) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ message: 'Missing required fields' })
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
        // Execute a query to insert the reservation order
        const [result] = await connection.execute(
            `INSERT INTO reservation_order (customer_name, customer_email, customer_phone_no, reservation_status)
       VALUES (?, ?, ?, ?)`,
            [name, email, phoneNo || null, 'Pending']
        );

        // Return the reservation ID as a JSON object
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reservation_id: result.insertId })
        };
    } catch (error) {
        console.log('Error inserting reservation order:', error);
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
