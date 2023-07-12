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
			.where("page_id", 1)
			.first();
	
	const individualTeamDiscovery = await knex("pages")
			.select("*")
			.where("page_id", 2)
			.first();
	
	const culture = await knex("pages")
			.select("*")
			.where("page_id", 3)
			.first();
	
	const homepage = await knex("pages")
			.select("*")
			.where("page_id", 4)
			.first();
	
	return {
		organisationalDesign: {
			...organisationalDesign,
			testimonials: await getTestimonials(1)
		},
		individualTeamDiscovery: {
			...individualTeamDiscovery,
			testimonials: await getTestimonials(2)
		},
		culture: {
			...culture,
			testimonials: await getTestimonials(3)
		},
		homepage: {
			...homepage,
			testimonials: await getTestimonials(null)
		}
	}
}


// Get Clients

export function getClients() {
	return knex("client_logos")
			.select("*");
}
