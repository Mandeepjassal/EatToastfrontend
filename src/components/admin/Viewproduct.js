import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FETCH_ALL_PRODUCTS } from "../../graphql/FetchProductQuery";
import { Link } from "react-router-dom";
function Viewproduct() {
  const { loading, error, data } = useQuery(FETCH_ALL_PRODUCTS);
  const [search, setSearch] = useState("");
  //   if (loading)
  //     return (
  //       <h2>
  //         ` Data is Loading <br /> ${error}`
  //       </h2>
  //     );

  if (error) {
    console.error("Error fetching Products:", error.message);
  }

  if (!data || !data.getAllCategory_db) {
    console.error("No data or empty data returned for Products.");
  }
  const setData = (product) => {
    let {
      Product_name,
      _id,
      Product_price,
      Product_description,
      Product_image,
      Category,
    } = product;
    console.log("ID" + _id);
    localStorage.setItem("id", _id);
    localStorage.setItem("Product_name", Product_name);
    localStorage.setItem("Product_price", Product_price);
    localStorage.setItem("Product_description", Product_description);
    localStorage.setItem("Product_image", Product_image);
    localStorage.setItem("Category", Category);
  };
  return (
    <>
      <div className="container">
        <div class="admin-navigation">
          <ul>
            <li>
              <a href="#">
                <span class="title">EatToast</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Dashboard">Dashboard</a>
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="fast-food-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Addcategory">Add Category</a>
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="restaurant"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Additems">Add Items</a>
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Viewproduct">View Product</a>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Viewcategory">View Categories</a>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Vieworders">View Order</a>
                </span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="exit-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Login">Log out</a>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 mx-1">
                <div className="input-group mx-4">
                  <input
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="productbox">
            {data?.getAllProducts_db
              .filter((product) => {
                return search.toLocaleLowerCase() === ""
                  ? product
                  : product.Product_name.toLocaleLowerCase().includes(search) ||
                      product.Product_description.toLocaleLowerCase().includes(
                        search
                      ) ||
                      product.Category.toLocaleLowerCase().includes(search);
              })
              .map((product) => (
                <div className="card">
                  <div className="dashboxicon">
                    <img
                      src="/img/Chocolate-Oreo-French-Toast.jpg"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <tr key={product._id}>
                      <div className="dashboxName">
                        Category Name : {product.Category}
                      </div>
                      <div className="dashboxName">
                        Product Name : {product.Product_name}
                      </div>
                      <div className="dashboxName">
                        Description : {product.Product_description}
                      </div>
                      <div className="dashboxName">
                        Price : {product.Product_price}
                      </div>
                      <div>
                        <Link
                          to={`/updateProduct/${product._id}`}
                          className="btn btn-primary "
                          onClick={() => setData(product)}
                        >
                          Update
                        </Link>{" "}
                        <Link
                          to={`/deleteProduct/${product._id}`}
                          className="btn btn-danger "
                          onClick={() => setData(product)}
                        >
                          Delete
                        </Link>
                      </div>
                    </tr>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewproduct;
