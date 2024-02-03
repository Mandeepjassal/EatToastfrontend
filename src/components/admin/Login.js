import React from "react";

function Login() {
  return (
    <>
      <div class="container ">
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
        </div>{" "}
      </div>

      <div class="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div class="card">
            <div class="card-header p-3">
              <h4>Login</h4>
            </div>
            <div class="card-body">
              <form method="post" action="">
                <div class="form-group mb-3">
                  <label>Email</label>
                  <input
                    class="form-control"
                    type="text"
                    name="username"
                  ></input>
                </div>
                <div class="form-group mb-3">
                  <label>Password</label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                  ></input>
                </div>
                <button
                  type="submit"
                  name="login_user"
                  class="btn btn-primary mb-3"
                >
                  Login
                </button>

                <p>
                  Not yet a member? <a href="/Registration">Register Here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
