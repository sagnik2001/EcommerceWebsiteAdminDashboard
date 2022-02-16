import React, { useEffect,useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useApi } from "../UseContext/ApiContext";
import Header from "./Nav";
import { Alert } from "react-bootstrap";
const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const {  RegisterContext,erroralertSignUp,seterroralertSignUp,signUperror } = useApi()
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  const SubmitHandler = (e) =>{
    e.preventDefault()
    if(firstName && lastName && email && password) {
      const user = {
       firstName,lastName,email,password
      }
      RegisterContext(user,setemail,setpassword,setfirstName,setlastName)
     
    }
  }
  return (
    <>
      <Header />
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={SubmitHandler}>
            <Row>
              <Col md={6}>
          
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  style={{ fontSize: "30px" }}
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicPassword"
                  style={{ fontSize: "30px" }}
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
         
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ fontSize: "30px" }}
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ fontSize: "30px" }}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          {erroralertSignUp &&
   
   <Alert variant="danger" style={{textAlign:'center',marginTop:'3vh'}} onClose={() => seterroralertSignUp(false)} dismissible>
     <p>{signUperror}</p>
   
   </Alert>
}
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
