export default function Navigation() {
	return (
			<nav className={"navbar navbar-expand-lg fixed-top"} data-bs-theme="dark" style={{backgroundColor: "transparent"}}>
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Reimagination</a>
					
					<div className={"justify-content-end"}>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/organisational-design">Design</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/individual-team-discovery">Discovery</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/culture">Culture</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
	)
}