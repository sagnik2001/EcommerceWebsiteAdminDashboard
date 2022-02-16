import axios from "axios";
import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../Api/apiconfig";


const Header = () => {
  const token = window.localStorage.getItem('token')
  const navigate= useNavigate()


  const handleSignOut =()=>{
   
    axios.post(
      `${api}/admin/signout`,
      {},
      {
          headers: { 
              
              'Content-Type' : 'application/json' ,
              'Authorization' : `Bearer ${token}`
          }
      }).then((res)=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/signin")
      })
      .catch((err)=>{
        console.log(err)
      })
  
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:'20px',zIndex :'1'}}>
      <Container fluid>
        <Link to="/" className="navbar-brand" style={{ fontSize: "30px" }}>
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          {!token?
            <>
          <Nav>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link" style={{textAlign:'center'}}>
                Signin
              </NavLink>
            </li>
        
          </Nav>
          <Nav>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link " style={{textAlign:'center'}}>
                Signup
              </NavLink>
            </li>
        
          </Nav>
          </>:
           <Nav>
           <li className="nav-item">
             <span onClick={(e)=>{
               e.preventDefault()
               handleSignOut()
             }} className="nav-link " style={{textAlign:'center',cursor:'pointer'}}>
               Signout
             </span>
           </li>
       
         </Nav>

}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;