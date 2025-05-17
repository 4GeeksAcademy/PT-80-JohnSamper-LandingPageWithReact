import React from "react";



const Navbar = () => {
	return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary p-2 px-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Lo-fi  pics gallery  </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto px-3">
                        <div className="navbar-nav justifyd-flex">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Services</a>
                            <a className="nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

         
	);
};



export default Navbar;