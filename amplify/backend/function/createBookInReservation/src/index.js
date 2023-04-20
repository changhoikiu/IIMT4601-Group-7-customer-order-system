const mysql = require('mysql2/promise');

exports.handler = async (event, context) => {
    const { httpMethod, pathParameters, body } = event;

    if (httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ message: 'Method not allowed' })
        };
    }

    // Set up the MySQL connection
    const connection = await mysql.createConnection({
        host: 'iimt4601proj.c2kossfof9fk.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: '12341234',
        database: 'inventory_db'
    });


    try {
        // parse the request body
        const { book_id, quantity } = JSON.parse(body);
        const { reservationId } = pathParameters;
        console.log("reservationId: " + reservationId + " quantity: " + quantity + " book_id: " + book_id);

        // required field check
        if (!book_id || !quantity) {
            return {
                statusCode: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ message: 'Missing required fields' })
            };
        }

        //check reservation existance
        var [rows] = await connection.execute(
            'SELECT * FROM reservation_order WHERE reservation_id = ?',
            [reservationId]
        );

        if (rows.length === 0) {
            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ message: 'Reservation not found' })
            };
        }

        //check book existance
        [rows] = await connection.execute(
            'SELECT * FROM book_info WHERE book_id = ?',
            [book_id]
        );

        if (rows.length === 0) {
            return {
                statusCode: 404,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({ message: 'Book not found' })
            };
        }

        const [result] = await connection.execute(
            'INSERT INTO book_in_reservation (reservation_id, book_id, quantity) VALUES (?, ?, ?)',
            [reservationId, book_id, quantity]
        );

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ reservation_id: result.insertId })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ message: 'Internal server error' })
        };
    } finally {
        connection.end();
    }
};
