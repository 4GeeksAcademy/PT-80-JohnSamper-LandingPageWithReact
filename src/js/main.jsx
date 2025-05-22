import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
   <div className="container mt-4 p-3">
  <div className="row row-cols-1 row-cols-md-4 g-5 justify-content-center">
    <div className="col d-flex justify-content-center">git <Card style={{ width: "24rem" }} /></div>
    <div className="col d-flex justify-content-center"><Card style={{ width: "24rem" }} /></div>
    <div className="col d-flex justify-content-center"><Card style={{ width: "24rem" }} /></div>
    <div className="col d-flex justify-content-center"><Card style={{ width: "24rem" }} /></div>
  </div>
  </div>
    <Footer/>
   

   
  
    
  </React.StrictMode>,
)
