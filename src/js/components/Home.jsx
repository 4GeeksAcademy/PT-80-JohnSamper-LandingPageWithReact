import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<div className=" p-3 ">
		<div className="card text-bg-dark  border border-white border-5 ">
			<img src="https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?semt=ais_hybrid&w=740" className="card-img" alt="..."/>
			<div className="card-img-overlay container-fluid">
				<div className=" d-flex flex-column justify-content-center h-100 p-3">
				<h1 className="card-title display-3"><strong>A Warm Welcome :)</strong></h1>
				<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum dolor eu nunc blandit ornare. Nulla pretium ante egestas lacus porttitor iaculis. Mauris feugiat scelerisque ex eget eleifend. Nam lacinia ullamcorper placerat. Nulla interdum neque risus, a euismod nibh tempor ac. In egestas luctus tortor. Pellentesque quis ipsum tempor, malesuada ipsum at, fringilla tortor. Sed mattis luctus blandit. Duis sollicitudin mollis feugiat. Integer convallis bibendum diam sed rutrum. Ut cursus et ex a blandit. Praesent sed fringilla orci. Sed vehicula tortor nisl, nec semper orci semper varius. Nulla velit lorem, finibus sed augue vel, pharetra vehicula lorem. Etiam semper aliquet nisi consectetur viverra.</p>
				<div>
					<button className="btn btn-outline-danger" type="submit">Search</button>
				</div>
				</div>

				
			</div>
		</div>
		</div>
	);
};



export default Home;

