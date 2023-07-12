import { Sequelize } from "sequelize";
import Knex from "knex";

const host = process.env.host;
const port = process.env.port;
const username = process.env.username;
const password = process.env.password;
const database = process.env.database;


// Connect DB

export const dbConnection = {
	host : host,
	port : port,
	user: username,
	password: password,
	database: database
}

export const knex = Knex({
	client: 'mysql2',
	connection: dbConnection,
	pool: {
		afterCreate(connection, done) {
			connection.query('SET time_zone = "+00:00";', (err) => {
				done(err, connection);
			})
		}
	}
});

export const sequelize = new Sequelize(
	database,
	username,
	password,
	{
		host: host,
		port: port,
		dialect: 'mysql',
		logging: false
	}
);

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});