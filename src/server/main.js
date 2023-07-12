import express from "express";
import ViteExpress from "vite-express";
import emailjs from "@emailjs/browser";
import {getClients, getPages} from "./get.js";

// App

const app = express();


// Send Email

app.post("/api/contact", async function (req, res) {
	await emailjs.sendForm('service_3sqq54p', 'template_s5vnz5d',
				req.body, 'LpZBvIHaKa3icIkGq')
			.then(r => res.send("success"))
			.catch(err => res.send(err));
});


// Get Pages & Testimonials

app.get("/api/pages", async function (req, res) {
	res.send(await getPages());
});


// Get Clients

app.get("/api/clients", async function (req, res) {
	res.send(await getClients());
});


// Server

const port = process.env.PORT || 3000;

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}`)
);
