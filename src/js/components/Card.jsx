import React from "react";



const Card = () => {
	return (

		<div className=" container d-flex justify-content-center align-items-center g-2 
		">

		<div className="card h-100 ">
			<img
				src="https://i.ytimg.com/vi/7eTJ8_m43PY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGF0gLSh_MA8=&rs=AOn4CLBme3ntirTI7h3ODVlBMYMV6SCROQ"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card Title</h5>
				<p className="card-text">
					This is a card with supporting text below as a natural lead-in.
				</p>
                <div className="card-footer w-100  d-flex justify-content-center">
                  <button className="btn btn-outline-danger" type="submit">Search</button>
                </div>
			</div>
		</div>
		</div>

		// <div
		// 	className="d-flex justify-content-center align-items-center "
		// 	style={{ height: "50vh", width: "20vw" }}
		// >
		// 	<div className="card h-100 w-100 border border-4 border-dark">
		// 		<img
		// 			src="https://i.ytimg.com/vi/7eTJ8_m43PY/hq720.jpg"
		// 			className="card-img-top"
		// 			alt="..."
		// 			style={{ objectFit: "cover", height: "40vh" }}
		// 		/>
		// 		<div className="card-body text-center">
		// 			<h5 className="card-title">Card Title</h5>
		// 			<p className="card-text">
		// 				This is a card with supporting text below as a natural lead-in.
		// 			</p>
		// 		</div>
		// 		<div className="card-footer d-flex justify-content-center">
		// 			<button className="btn btn-outline-danger" type="submit">
		// 				Search
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
  
	);
};



export default Card;