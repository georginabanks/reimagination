import express from "express";
import ViteExpress from "vite-express";
import emailjs from "@emailjs/browser";

// App

const app = express();


// Send Email

app.post("/api/contact", async function (req, res) {
	await emailjs.sendForm('service_3sqq54p', 'template_s5vnz5d',
				req.body, 'LpZBvIHaKa3icIkGq')
			.then(r => res.send("success"))
			.catch(err => res.send(err));
})


// Server

const port = process.env.PORT || 3000;

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}`)
);
