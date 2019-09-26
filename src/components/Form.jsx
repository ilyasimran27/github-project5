import React from "react";
function Form(){
    return(
        <div className="form">
          <div class="form-content">
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div class="form-content">
            <label>email</label>
            <input type="email"></input>
          </div>
          <div class="form-content">
            <label>password</label>
            <input type="password"></input>
          </div>
          <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</p>
          <button>Sign up for guthub</button>
          <p>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</p>

        </div>
    );
}
export default Form;