import React, { Component } from "react";
import "./../App.css";
// import CKEditor5 from "@ckeditor/ckeditor5-react";
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
      Variant: null,
      Hp: null,
      Rpm: null,
      VehicleOverview: null,
      VehicleFeatures: null,
      formErrors: {
        Brand: "",
        Model: "",
        Variant: "",
        Hp: "",
        Rpm: "",
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
        Variant: ${this.state.Brand}
        Hp: ${this.state.Brand}
        Rpm: ${this.state.Model}
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
          <h1>Contact</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="row w-100">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Variant">Variant</label>
                  <input
                    className={` form-control ${
                      formErrors.Variant.length > 0 ? "error" : null
                    }`}
                    placeholder="Variant"
                    type="text"
                    name="Variant"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Variant.length > 0 && (
                    <span className="errorMessage">{formErrors.Variant}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Model">Model</label>
                  <input
                    className={`form-control ${
                      formErrors.Model.length > 0 ? "error" : null
                    }`}
                    placeholder="Model"
                    type="text"
                    name="Model"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Model.length > 0 && (
                    <span className="errorMessage">{formErrors.Model}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Brand">Brand</label>
                  <input
                    className={` form-control ${
                      formErrors.Brand.length > 0 ? "error" : null
                    }`}
                    placeholder="Brand"
                    type="text"
                    name="Brand"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Brand.length > 0 && (
                    <span className="errorMessage">{formErrors.Brand}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Hp">Hp</label>
                  <input
                    className={`form-control ${
                      formErrors.Hp.length > 0 ? "error" : null
                    }`}
                    placeholder="Hp"
                    type="text"
                    name="Hp"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Hp.length > 0 && (
                    <span className="errorMessage">{formErrors.Hp}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Rpm">Rpm</label>
                  <input
                    className={`form-control ${
                      formErrors.Rpm.length > 0 ? "error" : null
                    }`}
                    placeholder="Rpm"
                    type="text"
                    name="Rpm"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Rpm.length > 0 && (
                    <span className="errorMessage">{formErrors.Rpm}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="VehicleOverview">Vehicle-Overview</label>
                  <textarea
                    className={`form-control
                  ${formErrors.VehicleOverview.length > 0 ? "error" : null}`}
                    placeholder="VehicleOverview"
                    type="text"
                    name="VehicleOverview"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.VehicleOverview.length > 0 && (
                    <span className="errorMessage">
                      {formErrors.VehicleOverview}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row w-100">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="VehicleFeatures">VehicleFeatures</label>
                  <textarea
                    className={`form-control ${
                      formErrors.VehicleFeatures.length > 0 ? "error" : null
                    }`}
                    placeholder="VehicleFeatures"
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
            <form>
              <div className="form-group multi-preview">
                {(this.fileArray || []).map((url) => (
                  <img src={url} alt="..." />
                ))}
              </div>

              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onChange={this.uploadMultipleFiles}
                  multiple
                />
              </div>
              <button
                type="button"
                className="btn btn-danger btn-block"
                onClick={this.uploadFiles}
              >
                Upload
              </button>
            </form>

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
