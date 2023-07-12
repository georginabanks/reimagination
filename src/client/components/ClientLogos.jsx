import {useState} from "react";

export default function ClientLogos() {
	
	const [clients, setClients] = useState([]);
	
	return (
			<div className={"clients homepage-section"}>
				<h1>Clients</h1>
				
				<div className={"row"}>
				{
					clients.map(client => {
						return (
								<div className={"col-md-2"}>
									<img src={client.logo}
										 width={"100%"}
										 alt={client.name + " Logo"}
										 className={"client-logo"}
									/>
								</div>
						)
					})
				}
				</div>
			</div>
	)
}