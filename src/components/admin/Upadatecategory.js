import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { FETCH_CATEGORY_BY_ID } from "../../graphql/FetchCatById";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { UPDATE_CATEGORY_BY_ID } from "../../graphql/UpdateCategoryById";
function Upadatecategory() {
  const navigate = useNavigate();
  const [category_name, setcategory_name] = useState("");
  const [errorl, setError] = useState(false);
  const [updateCat, { loading1, error1, data1 }] = useMutation(
    UPDATE_CATEGORY_BY_ID
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCat({
      variables: {
        catId: id,
        updatedData: {
          category_name: category_name,
        },
      },
      refetchQueries: [{ query: FETCH_ALL_CATEGORIES }],
    });

    navigate("/Viewcategory");

    alert("Category Updated Successfully");
  };
  const [user, setUser] = useState({
    category_name: "",
  });
  const { id } = useParams();
  console.log(`url parameter:${id}`);

  const { loading, error, data } = useQuery(FETCH_CATEGORY_BY_ID, {
    variables: { catId: id },
  });
  useEffect(() => {
    setcategory_name(localStorage.getItem("category_name"));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
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
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header p-3">
              <h4>Update Category</h4>
            </div>

            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    id="categoryName"
                    className="form-control"
                    name="categoryName"
                    value={category_name}
                    onChange={(e) => setcategory_name(e.target.value)}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary "
                  value="Submit"
                  style={{ margin: "0 auto" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upadatecategory;
