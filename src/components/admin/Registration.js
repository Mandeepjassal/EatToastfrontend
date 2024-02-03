import React from "react";

function Registration() {
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
              <h4>Registration Form</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label>Firstname</label>
                  <input
                    className="form-control"
                    type="text"
                    name="Firstname"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Lastname</label>
                  <input className="form-control" type="text" name="Lastname" />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input className="form-control" type="email" name="email" />
                </div>
                <div className="form-group mb-3">
                  <label>Phone No</label>
                  <input className="form-control" type="text" name="phoneno" />
                </div>
                <div className="form-group mb-3">
                  <label>Address</label>
                  <input className="form-control" type="text" name="address" />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password_1"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Confirm password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password_2"
                  />
                </div>
                <div className="form-group mb-3">
                  <label>User Type</label>
                  <select className="form-control" name="usertype">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="emplyee">Employee</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                  Register
                </button>
                <p>
                  Already a registered? <a href="/Login">Log in</a>
                </p>
                <p>
                  Go to Dashboard <a href="/Dashboard">Dashboard</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
