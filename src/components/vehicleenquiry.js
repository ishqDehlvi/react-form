import React, { Component } from "react";
import "./../App.css";
// import CKEditor5 from "@ckeditor/ckeditor5-react";
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Brand: null,
      Model: null,
      Name: null,
      Mobile: null,
      email: null,
      VehicleOverview: null,
      VehicleFeatures: null,
      formErrors: {
        Brand: "",
        Model: "",
        Name: "",
        Mobile: "",
        email: "",
        VehicleOverview: "",
        VehicleFeatures: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Brand: ${this.state.Brand}
        Name: ${this.state.Brand}
        Mobile: ${this.state.Brand}
        email: ${this.state.Model}
        Vehicle-Overview: ${this.state.Model}
        VehicleFeatures: ${this.state.VehicleFeatures}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Brand":
        formErrors.Brand =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Model":
        formErrors.Model =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "VehicleFeatures":
        formErrors.VehicleFeatures =
          value.length < 100 ? "minimum 100 characaters required" : "";
        break;
      case "VehicleOverview":
        formErrors.VehicleFeatures =
          value.length < 100 ? "minimum 100 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Vehicle Enquiry Form</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Name">Name</label>
                  <input
                    className={` form-control ${
                      formErrors.Name.length > 0 ? "error" : null
                    }`}
                    placeholder="Name"
                    type="text"
                    name="Name"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Name.length > 0 && (
                    <span className="errorMessage">{formErrors.Name}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Mobile">Mobile</label>
                  <input
                    className={`form-control ${
                      formErrors.Mobile.length > 0 ? "error" : null
                    }`}
                    placeholder="Mobile"
                    type="text"
                    name="Mobile"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Mobile.length > 0 && (
                    <span className="errorMessage">{formErrors.Mobile}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className={`form-control ${
                      formErrors.email.length > 0 ? "error" : null
                    }`}
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Name">Vehicle info</label>
                  <input
                    className={` form-control ${
                      formErrors.Name.length > 0 ? "error" : null
                    }`}
                    placeholder="vehicle info"
                    type="text"
                    name="Vehicleinfo"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Name.length > 0 && (
                    <span className="errorMessage">{formErrors.Name}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="preposedcost">Preposed cost</label>
                  <input
                    className={` form-control ${
                      formErrors.Name.length > 0 ? "error" : null
                    }`}
                    placeholder="Preposed cost"
                    type="number"
                    name="Name"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Name.length > 0 && (
                    <span className="errorMessage">{formErrors.Name}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row w-100">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="VehicleFeatures">Message</label>
                  <textarea
                    className={`form-control ${
                      formErrors.VehicleFeatures.length > 0 ? "error" : null
                    }`}
                    placeholder="Message"
                    type="VehicleFeatures"
                    name="VehicleFeatures"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.VehicleFeatures.length > 0 && (
                    <span className="errorMessage">
                      {formErrors.VehicleFeatures}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
