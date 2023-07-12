import {useEffect, useState} from "react";
import {getClients} from "../api/api.jsx";

export default function ClientLogos() {
	
	const [clients, setClients] = useState([]);
	
	useEffect(() => {
		getClients().then(res => setClients(res))
	})
	
	return (
			<section className={"clients dark"}>
				<h2>Clients</h2>
				
				<div className={"row"}>
				{
					clients.map(client => {
						return (
								<div className={"col-md-2"} key={client.id}>
									<img src={client.img_src}
										 width={"100%"}
										 alt={client.client_name + " Logo"}
										 className={"client-logo"}
									/>
								</div>
						)
					})
				}
				</div>
			</section>
	)
}