import {DataTypes, Sequelize} from "sequelize";
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
};

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


// Create Tables

export const ClientLogo = sequelize.define("clientLogo", {
	client_name: { type: DataTypes.STRING },
	img_src: { type: DataTypes.STRING }
}, { timestamps: false, tableName: "client_logos" });

export const Page = sequelize.define("page", {
	page_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	page_name: { type: DataTypes.STRING },
	content: { type: DataTypes.TEXT("medium") },
	featured_image: { type: DataTypes.STRING }
}, { timestamps: false, tableName: "pages" });

export const Testimonial = sequelize.define("testimonial", {
	testimonial_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: { type: DataTypes.STRING },
	bio: { type: DataTypes.STRING },
	testimonial: { type: DataTypes.TEXT("medium") }
}, { timestamps: false, tableName: "testimonials" });


// Foreign Keys

Testimonial.belongsTo(Page);
Page.hasMany(Testimonial);


sequelize.sync().then(() => {
   console.log('Tables created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});