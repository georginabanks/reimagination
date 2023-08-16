import { ClientLogo, Testimonial, Page } from "./db.js";

let testimonials = [
		{
			name: "Steve Chambers",
			testimonial: "Natalie is as dedicated a practitioner of Organisation Development (OD) as you could ever hope to find but has no ivory tower: She has an excellent balance of skill, experience and common sense that enables her to deliver workable plans and solutions right across the spectrum of scale and complexity. She is passionate and driven and guided well by a sense of doing 'the right thing'. A great team player and individual coach I would not hesitate to recommend her in a role as Head of OD or HR. In my view her breadth and balance suggest she has very good potential for general management should she ever need a change of discipline.",
			pagePageId: 2,
			bio: "Non-Executive Director"
		},
		{
			name: "Naomi Hergott Hamilton",
			testimonial: "Nat is a brilliant, bold, and compassionate leader. I was fortunate to work with Nat on a change programme for eight months. In that time, I saw her demonstrate expertise in business transformation, organisational design and effectiveness, and change management. What makes Nat stand out beyond her expertise is her courageous leadership and the way that she truly partners with organisations to become a part of the team. She cares deeply about embedding capability within the organisation and executes on this through coaching and mentoring many individuals (including myself) throughout the change programme. Nat has a fantastic way providing insight and feedback in constructive, actionable ways for individuals, teams, and leaders. Nat's insightful, focused, pragmatic style enables her to implement change extremely well, and in a way that builds lasting relationships and change adoption. I would be thrilled to work with Nat again and highly recommend her to any organisation looking for a partner to consult and deliver transformational change.",
			pagePageId: 1,
			bio: "Transformation & Change | Project Manager"
		},
		{
			name: "John Dickson",
			testimonial: "Excellent team facilitator and biz transformer. Open, direct, on it and great sense of humour. Great to work with. Great team player. ",
			pagePageId: 2,
			bio: "Director at Dancehammer Group Ltd"
		},
		{
			name: "Louise Nolan",
			testimonial: "Smart, courageous and compassionate are the three words I would use to describe Natalie. She has a unique combination of skills and experience which makes her truly talented in her ability to diagnose, determine and drive any level of transformation or people agenda. As my boss and later as a stakeholder she always offered her support and shared her insight and business acumen. As a senior and female leader she could be counted on to hold the line despite some difficult and politically sensitive opposition; she always manages to find the balance between what is right for the business and its people. Her work ethic and production is phenomenal, I have often wondered how one person can spin so many plates successfully and still have the energy to drive and motivate others around her. Working with Natalie was very inspirational for me and I would recommend her without hesitation. ",
			pagePageId: 1,
			bio: "Founder of The Sparx Box | Learning & Development"
		}
	]

let pages = [
		{
			page_name: "Organisational Design",
			content: "Organisational models are a way to help shape and define where accountabilities sit within an organisation. My approach in helping to define the right model, shape and design is to start with understanding what capabilities are in place ‘our current’, what are required and, what are missing against the backdrop of the business model. \n" +
					"When we understand what capabilities we need, we can assess the maturity and make considered investment decisions that allow us to move towards our ideal design ‘future state’.\n" +
					"The key to the success of a change in design is not the design itself, it is to focus on the whole system. Whole system focus allows you to work holistically around systems, structures, practices, policies, values and behaviours.  I have found that successful implementations are as a result of working through a change path – Diagnostics, Design, Delivery and Development and doing that in partnership with leaders and teams through a variety of workshops and interventions to ensure that change is owned within the business.",
			featured_image: "https://i.postimg.cc/fbn06B0W/andrew-neel-1-29wyvv-LJA-unsplash.jpg"
		},
		{
			page_name: "Individual/Team Discovery",
			content: "I have a real passion for helping people and teams to explore their preferences in different situations and how they can learn to adapt those preferences and develop their whole self. Being part of a person’s journey is a privileged position to be in. \n" +
					"The methods and approaches I use allow us to understand ourselves at a deeper level and to appreciate that we oversee our own destiny, how we change our behaviour influences how others will behave around us.\n" +
					"Bringing difference into a conversation or team is vital to team success, by helping teams to explore how to seek difference and encourage it, can help teams to excel in their performance.",
			featured_image: "https://i.postimg.cc/prT9DS3C/tyler-lastovich-Qi-Oz-Tcj-U6-GA-unsplash.jpg"
		},
		{
			page_name: "Culture",
			content: "I have experienced some inspiring development associated with culture that has helped me to think differently about how to help teams and organisations to make a shift in culture in a practical way.\n" +
					"By identifying what our current culture is, gives us a basis to explore and shape what we want our ideal culture to be, what we want to focus on and what levers we need to explore to help us to shift from our current to our future. \n" +
					"I like to build workshops and journey’s that subtly lay a plan for teams so they can take accountability for their development paths and act as the conduit for change in helping them to remain on that path.",
			featured_image: "https://i.postimg.cc/jqgnssJF/marc-olivier-jodoin-j2ve-Izs-S9s-Y-unsplash.jpg"
		},
		{
			page_name: "Home",
			content: "Reimagine your potential! \n" +
					"Reimagine your opportunities!\n" +
					"Reimagine your abilities!\n" +
					"My passion is to work with individuals, teams, and organisations to think beyond the current state and look for new patterns, new possibilities, and fulfilment. Investing the time to stand in inquiry I find is a critical path to understanding what are the patterns and issues that we face as leaders and teams, what lies below the surface. \n" +
					"Transformative journeys are created by holding a mirror up to our whole self and being curious about how we can contribute further. By ‘holding the space’ for others to explore and have courageous conversations with each other allows for growth, development and a deepened knowledge of the ‘real’ issues and patterns. \n" +
					"As a catalyst for humanistic change, I like to see how individuals and teams take control of their own change journeys and thrive on seeing this growth, by creating a safe space for all points of view and encouraging difference into the conversation, this allows people to explore the patterns and issues that are blocking progress.\n" +
					"My methods and approaches have supported various leaders, teams within both national and global companies, including a variety of Train Companies, Pearson, HMRC, Costa Express, Three and Maersk",
			featured_image: "https://i.postimg.cc/nrPXTkJJ/name-gravity-Ad-Us32i0jc-unsplash.jpg"
		},
]

const clients = [
		{
			client_name: "Costa",
			img_src: "https://media.licdn.com/dms/image/C560BAQFLDqtTqLXWfQ/company-logo_200_200/0/1663686443062?e=1693440000&v=beta&t=GT1fxubaLJe2v3jU5vtwGpKTAfsl3t4WLG6iQs1FvEI"
		},
		{
			client_name: "Pearson",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQFJV9xyJD52cQ/company-logo_200_200/0/1677656554720?e=1693440000&v=beta&t=zJPOCqYQJTWO9JotJUbkCnzX0_XGEESx4BSP9Hqh78g"
		},
		{
			client_name: "Digital Wholesale Solutions",
			img_src: "https://media.licdn.com/dms/image/C4D0BAQHn9zW1C1ZO2Q/company-logo_200_200/0/1663686441372?e=1693440000&v=beta&t=UHljVHZ1LlyRwxG0qU6FEc53HWmFQ-fGC9gp-ZowTyQ"
		},
		{
			client_name: "HM Revenue & Customs",
			img_src: "https://media.licdn.com/dms/image/D4E0BAQHNmKfsmdgdSA/company-logo_200_200/0/1663661128503?e=1693440000&v=beta&t=Sn7wcU1OmgAIaKVHtWcus5LennhShNHkW8-CTXgMh1E"
		},
		{
			client_name: "Wellcome Trust",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQH_gIMEmm_hcw/company-logo_200_200/0/1668435561925?e=1693440000&v=beta&t=Vs_ThtbXxslaYJ6dg1BVKuhIEX-wQGb84CH-kkpTpLA",
		},
		{
			client_name: "Three",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQHATxND54spxw/company-logo_200_200/0/1663840035448?e=1693440000&v=beta&t=y-FiH2QdvK1CzrtEuBrXaXHNaciBjH8UUByiNiD2RnQ"
		},
		{
			client_name: "Travelport",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQF7lFKnAYcmzA/company-logo_200_200/0/1677150204321?e=1693440000&v=beta&t=cAjIx9M7gr973J254Fol2lh9uGbyjbrf3KYmkAglhnU"
		},
		{
			client_name: "Maersk",
			img_src: "https://media.licdn.com/dms/image/C4D0BAQFxaOJ8VzplhA/company-logo_200_200/0/1616162064676?e=1693440000&v=beta&t=RMuWNQtGWIKZL7a7FrrC3rDFQJKRE-j9hu3vsxrr_go"
		},
		{
			client_name: "Arriva Rail London",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQH8Oq6pFUpQ7w/company-logo_200_200/0/1663749771503?e=1693440000&v=beta&t=rjrAT9xCIwZM47zn-69I_3RARnvd2FkB4-WS2PO4yU8"
		},
		{
			client_name: "Monitise",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQG7rGFokxqD4A/company-logo_200_200/0/1519856306313?e=1693440000&v=beta&t=CTyxOnZoDAuMyj-rEkqVMcq6CUIIPLM95ttOtTSwDs8"
		},
		{
			client_name: "Visa",
			img_src: "https://media.licdn.com/dms/image/C560BAQEP8_eM4zW8bw/company-logo_200_200/0/1626865473807?e=1693440000&v=beta&t=PhbfyBn1GThhuSmaMoOS7M3ieOdYKJV9QOhsWYD3UUQ"
		},
		{
			client_name: "South Western Railway",
			img_src: "https://media.licdn.com/dms/image/C4E0BAQFj5S1iADA33Q/company-logo_200_200/0/1663925846099?e=1693440000&v=beta&t=nHgZQDdAOEtCk43KOv7dTwtW9fKMMyhJTtImX-7--x0"
		}
	]

// await ClientLogo.bulkCreate(clients)
// await Page.bulkCreate(pages)
// await Testimonial.bulkCreate(testimonials)