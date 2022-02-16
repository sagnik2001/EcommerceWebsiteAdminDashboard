import React, { useEffect, useState } from "react";
import Header from "./Nav";
import Sidebar from "../Containers/Sidebar";
import { Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import { api } from "../Api/apiconfig";
import AddCategoryModal from "../Containers/AddCategoryModal";
const Category = () => {
  const [category, setcategory] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  
  useEffect(() => {
    axios
      .get(`${api}/api/category/get`)
      .then((res) => {
        setcategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Rendering Out the categories

  const renderCategories = (categories) => {
    let myCategory = [];
    for (let category of categories) {
      myCategory.push(
        <li key={category.id} style={{ fontSize: "18px" }}>
          {category.name}
          {category?.children?.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategory;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if(category.children.length > 0 && category.children) {
          createCategoryList(category.children,options)
      }
    }
    return options
  };

  {
    /* The above renderCategories func has been recursively calling its children */
  }

  const createCategory = createCategoryList(category)
  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2">
              <h1 class="h2">Category</h1>
              <div class="btn-toolbar mb-md-0 mb-2">
                <Button
                  type="button"
                  class="btn btn-sm btn-outline-secondary "
                  onClick={() => setModalShow(true)}
                >
                  Add
                </Button>
              </div>
            </div>
            <Row>
              <Col md={12}>{renderCategories(category)}</Col>
            </Row>
            <AddCategoryModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              createCategory = {createCategory}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Category;
