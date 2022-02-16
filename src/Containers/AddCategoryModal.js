import React from "react";
import { Modal, Button, Form,Row,Col } from "react-bootstrap";
const AddCategoryModal = (props) => {
    console.log(props.createCategory)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ fontSize: "30px" }}
          >
            <Form.Label>Category Name</Form.Label>
            <Form.Control type="email" placeholder="Enter name" size="lg" />
          </Form.Group>
          <Form.Select aria-label="Default select example" size="lg" className="form-control form-control-sm">
  <option>Select category</option>
 {
     props.createCategory.map((value)=>
         <option key={value.value} value = {value.value}>{value.name}</option>
     )
 }
</Form.Select>
<Row style={{marginTop:'2vh'}}>
                <Col>
                    <input type="file" name="categoryImage"  />
                </Col>
            </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategoryModal;
