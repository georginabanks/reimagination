import { knex } from "./db.js";

// Get Pages

export function getTestimonials(id) {
	return knex("testimonials")
			.select("*")
			.where("pagePageId", id)
}

export async function getPages() {
	
	const organisationalDesign = await knex("pages")
			.select("*")
			.where("page_id", 1);
	
	const individualTeamDiscovery = await knex("pages")
			.select("*")
			.where("page_id", 2);
	
	const culture = await knex("pages")
			.select("*")
			.where("page_id", 3);
	
	return {
		organisationalDesign: {
			...organisationalDesign,
			testimonials: getTestimonials(1)
		},
		individualTeamDiscovery: {
			...individualTeamDiscovery,
			testimonials: getTestimonials(2)
		},
		culture: {
			...culture,
			testimonials: getTestimonials(3)
		},
		homepage: getTestimonials(null)
	}
}


// Get Clients

export function getClients() {
	return knex("client_logos")
			.select("*");
}