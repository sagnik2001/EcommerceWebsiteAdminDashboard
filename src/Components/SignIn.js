import React, { useState ,useEffect} from "react";
import { Container, Form, Row,Col,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useApi } from "../UseContext/ApiContext";
import Header from "./Nav";
import { Alert } from "react-bootstrap";

const SignIn = () => {
 const [ email,setemail ] = useState('')
 const [password,setpassword] = useState('')
 const navigate= useNavigate()
 const {SignInContext,authenticated,erroralertSignIn,seterroralertSignIn,signInerror} = useApi()
 const token = window.localStorage.getItem('token')
 useEffect(() => {
 


  if( token){
    navigate("/")
  }
  else {
    navigate("/signin")
  }
}, [token]);
 const SubmitHandler = (e) =>{
   e.preventDefault()
   if(email && password) {
     const user = {
       email,password
     }
     SignInContext(user,setemail,setpassword)
    
   }
 }

  return (
    <>
      <Header />
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={SubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail" style={{fontSize:'30px'}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value= {email} onChange={(e)=>{setemail(e.target.value)}} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword" style={{fontSize:'30px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value = {password} onChange = {(e)=>{
                  setpassword(e.target.value)
                }} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        
     {erroralertSignIn &&
   
      <Alert variant="danger" style={{textAlign:'center',marginTop:'3vh'}} onClose={() => seterroralertSignIn(false)} dismissible>
        <p>{signInerror}</p>
      
      </Alert>
}

      </Container>
    </>
  );
};

export default SignIn;
