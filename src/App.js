import React, { Component } from "react";
import "./App.css";



const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
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
        VehicleFeatures: ""
      }
    };
  }

  handleSubmit = e => {
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

  handleChange = e => {
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
          <h1>New Tractor Form</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Brand">
              <label htmlFor="Brand">Brand</label>
              <input
                className={formErrors.Brand.length > 0 ? "error" : null}
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
            <div className="Model">
              <label htmlFor="Model">Model</label>
              <input
                className={formErrors.Model.length > 0 ? "error" : null}
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
            <div className="Variant">
              <label htmlFor="Variant">Variant</label>
              <input
                className={formErrors.Variant.length > 0 ? "error" : null}
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
            <div className="Hp">
              <label htmlFor="Hp">Hp</label>
              <input
                className={formErrors.Hp.length > 0 ? "error" : null}
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
            <div className="Rpm">
              <label htmlFor="Rpm">Rpm</label>
              <input
                className={formErrors.Rpm.length > 0 ? "error" : null}
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
            <div className="VehicleOverview">
              <label htmlFor="VehicleOverview">Vehicle-Overview</label>
              <input
                className={formErrors.VehicleOverview.length > 0 ? "error" : null}
                placeholder="VehicleOverview"
                type="text"
                name="VehicleOverview"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.VehicleOverview.length > 0 && (
                <span className="errorMessage">{formErrors.VehicleOverview}</span>
              )}
            </div>
            <div className="VehicleFeatures">
              <label htmlFor="VehicleFeatures">VehicleFeatures</label>
              <input
                className={formErrors.VehicleFeatures.length > 0 ? "error" : null}
                placeholder="VehicleFeatures"
                type="VehicleFeatures"
                name="VehicleFeatures"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.VehicleFeatures.length > 0 && (
                <span className="errorMessage">{formErrors.VehicleFeatures}</span>
              )}
            </div>
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button>
            </form >

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
