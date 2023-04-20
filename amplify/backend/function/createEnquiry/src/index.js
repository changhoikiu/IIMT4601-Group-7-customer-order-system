const mysql = require('mysql2/promise');

exports.handler = async (event, context) => {
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

    // Parse the request body to extract the form data
    const body = JSON.parse(event.body);

    const requiredFields = ['name', 'email', 'type', 'message'];

    if (!requiredFields.every(field => field in body)) {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ message: 'Missing required fields in request body' })
        };
    }

    const { name: customer_name, email: customer_email, phoneNo: customer_phone_no, type: enquiry_subject, message: enquiry_message, reservation_id } = body;

    // Set up the MySQL connection
    const connection = await mysql.createConnection({
        host: 'iimt4601proj.c2kossfof9fk.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: '12341234',
        database: 'inventory_db',
    });

    try {
        // Check if the reservation_id exists in the reservation_order table
        if (reservation_id) {
            const [rows, fields] = await connection.execute(
                'SELECT * FROM reservation_order WHERE reservation_id = ?',
                [reservation_id]
            );

            if (rows.length === 0) {
                // If the reservation_id does not exist, return an error response
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ message: 'The provided reservation ID does not exist.' })
                };
            }
        }

        // Perform a MySQL query to insert data into the customer_enquiry table
        let [rows, fields] = [];

        connection.query("USE enquiry_db;")
        if (customer_phone_no && reservation_id) {
            [rows, fields] = await connection.execute(
                'INSERT INTO customer_enquiry (customer_name, customer_email, customer_phone_no, enquiry_subject, enquiry_message, reservation_id) VALUES (?, ?, ?, ?, ?, ?)',
                [customer_name, customer_email, customer_phone_no, enquiry_subject, enquiry_message, reservation_id]
            );
        } else if (customer_phone_no && !reservation_id) {
            [rows, fields] = await connection.execute(
                'INSERT INTO customer_enquiry (customer_name, customer_email, customer_phone_no, enquiry_subject, enquiry_message) VALUES (?, ?, ?, ?, ?)',
                [customer_name, customer_email, customer_phone_no, enquiry_subject, enquiry_message]
            );
        } else if (!customer_phone_no && reservation_id) {
            [rows, fields] = await connection.execute(
                'INSERT INTO customer_enquiry (customer_name, customer_email, enquiry_subject, enquiry_message, reservation_id) VALUES (?, ?, ?, ?, ?)',
                [customer_name, customer_email, enquiry_subject, enquiry_message, reservation_id]
            );
        } else {
            [rows, fields] = await connection.execute(
                'INSERT INTO customer_enquiry (customer_name, customer_email, enquiry_subject, enquiry_message) VALUES (?, ?, ?, ?)',
                [customer_name, customer_email, enquiry_subject, enquiry_message]
            );
        }

        // Get the ID of the last inserted record
        const enquiry_id = rows.insertId;

        // Process the query results
        console.log(rows.affectedRows + ' rows inserted');

        // Return a success response with the ID of the inserted record
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ enquiry_id })
        };
    } catch (error) {
        // Handle any errors that occur during the query
        console.log(error);

        // Return an error response
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ message: 'An error occurred while processing the request.' })
        };
    } finally {
        // Close the MySQL connection
        await connection.end();
    }
};
