

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const mysql = require('mysql');


exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const connection = mysql.createConnection({
        host: 'iimt4601proj.c2kossfof9fk.ap-southeast-1.rds.amazonaws.com',
        user: 'admin',
        password: '12341234',
        database: 'inventory_db'
    });

    await connection.connect(function (err) {
        if (err) {
            console.error('connection error: ' + err);
            throw err;
        };

        console.log('connected');
    });

    const query = 'SELECT 1+1 AS solution;';
    var response;
    const result = await connection.query(query, function (err, result) {
        if (err) {
            console.error('query error: ' + err);
            throw err
        };
        response = result;
        console.log(response);
    });

    return {
        statusCode: 200,
        response: response
    };
};
