import React from "react";



const Card = ({ bodyText, style }) => (
  <div className="card" style={style}>
    <div className="card-body">
	  <img src="https://i.ytimg.com/vi/7eTJ8_m43PY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGF0gLSh_MA8=&rs=AOn4CLBme3ntirTI7h3ODVlBMYMV6SCROQ" className="card-img-top"
                alt="..."
            />
      <p className="card-text">{bodyText}</p>
	  <div className="d-flex justify-content-center">
      <button className="btn btn-outline-danger" type="submit">Search</button>
	  </div>
    </div>
  </div>
);



export default Card;