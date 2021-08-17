import React, { Component } from "react";
import "./../App.css";
import JoditEditor from "jodit-react";
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
      content: "",
      Brand: null,
      Model: null,
      Variant: null,
      Hp: null,
      Chassisnumber: null,
      Enginenumber: null,
      RCnumber: null,
      Registrationyear: null,
      Exchangevalue: null,
      Otsalecommitment: null,
      Ownername: null,
      Receivedamount: null,
      Exchangedby: null,
      Mobilenumber: null,
      Procuredby: null,
      Remarks: null,
      VehicleOverview: null,
      VehicleFeatures: null,
      formErrors: {
        Brand: "",
        Model: "",
        Variant: "",
        Hp: "",
        Chassisnumber: "",
        Enginenumber: "",
        RCnumber: "",
        Registrationyear: "",
        Exchangevalue: "",
        Otsalecommitment: "",
        Receivedamount: "",
        Ownername: "",
        Exchangedby: "",
        Mobilenumber: "",
        Procuredby: "",
        Remarks: "",
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
        Registrationyear: ${this.state.Model}
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
        <div className="form-wrapper ">
          <h1>New Tractor Form</h1>
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
                  <label htmlFor="Registrationyear">Registration Year</label>
                  <input
                    className={`form-control ${
                      formErrors.Registrationyear.length > 0 ? "error" : null
                    }`}
                    placeholder="Registrationyear"
                    type="number"
                    name="Registrationyear"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Registrationyear.length > 0 && (
                    <span className="errorMessage">{formErrors.Registrationyear}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Chassisnumber">Chassis Number</label>
                  <input
                    className={`form-control ${
                      formErrors.Chassisnumber.length > 0 ? "error" : null
                    }`}
                    placeholder="Chassis number"
                    type="number"
                    name="Chassisnumber"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Chassisnumber.length > 0 && (
                    <span className="errorMessage">{formErrors.Chassisnumber}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Enginenumber">Engine Number</label>
                  <input
                    className={`form-control ${
                      formErrors.Enginenumber.length > 0 ? "error" : null
                    }`}
                    placeholder="Enginenumber"
                    type="number"
                    name="Enginenumber"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Enginenumber.length > 0 && (
                    <span className="errorMessage">{formErrors.Enginenumber}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="RCnumber">RCnumber</label>
                  <input
                    className={`form-control ${
                      formErrors.RCnumber.length > 0 ? "error" : null
                    }`}
                    placeholder="RCnumber"
                    type="number"
                    name="RCnumber"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.RCnumber.length > 0 && (
                    <span className="errorMessage">{formErrors.RCnumber}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Exchangevalue">Exchange Value</label>
                  <input
                    className={`form-control ${
                      formErrors.Exchangevalue.length > 0 ? "error" : null
                    }`}
                    placeholder="Exchangevalue"
                    type="number"
                    name="Exchangevalue"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Exchangevalue.length > 0 && (
                    <span className="errorMessage">{formErrors.Exchangevalue}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Otsalecommitment">OT Sale Commitment</label>
                  <input
                    className={`form-control ${
                      formErrors.Otsalecommitment.length > 0 ? "error" : null
                    }`}
                    placeholder="Ot Sale Commitment"
                    type="text"
                    name="Otsalecommitment"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Otsalecommitment.length > 0 && (
                    <span className="errorMessage">{formErrors.Otsalecommitment}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Receivedamount">Received Amount</label>
                  <input
                    className={`form-control ${
                      formErrors.Receivedamount.length > 0 ? "error" : null
                    }`}
                    placeholder="Received Amount"
                    type="number"
                    name="Receivedamount"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Receivedamount.length > 0 && (
                    <span className="errorMessage">{formErrors.Receivedamount}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Ownername">Owner Name</label>
                  <input
                    className={` form-control ${
                      formErrors.Ownername.length > 0 ? "error" : null
                    }`}
                    placeholder="Owner Name"
                    type="text"
                    name="Ownername"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Ownername.length > 0 && (
                    <span className="errorMessage">{formErrors.Ownername}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Exchangedby">Exchanged by</label>
                  <input
                    className={`form-control ${
                      formErrors.Exchangedby.length > 0 ? "error" : null
                    }`}
                    placeholder="Exchangedby"
                    type="text"
                    name="Exchangedby"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Exchangedby.length > 0 && (
                    <span className="errorMessage">{formErrors.Exchangedby}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Mobilenumber">Mobile Number</label>
                  <input
                    className={` form-control ${
                      formErrors.Mobilenumber.length > 0 ? "error" : null
                    }`}
                    placeholder="Mobilenumber"
                    type="tel"
                    name="Mobilenumber"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Mobilenumber.length > 0 && (
                    <span className="errorMessage">{formErrors.Mobilenumber}</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group">
                  <label htmlFor="Procuredby">Procured by</label>
                  <input
                    className={` form-control ${
                      formErrors.Procuredby.length > 0 ? "error" : null
                    }`}
                    placeholder="Procured by"
                    type="tel"
                    name="Procuredby"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Procuredby.length > 0 && (
                    <span className="errorMessage">{formErrors.Procuredby}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="Remarks">Remarks</label>
                  <input
                    className={`form-control ${
                      formErrors.Remarks.length > 0 ? "error" : null
                    }`}
                    placeholder="Remarks"
                    type="text"
                    name="Remarks"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.Remarks.length > 0 && (
                    <span className="errorMessage">{formErrors.Remarks}</span>
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
            <div className="row w-100">
              <div className="col-12 mb-3">
                <JoditEditor
                  // ref={editor}
                  value={this.state.content}
                  config={{
                    readonly: false, // all options from https://xdsoft.net/jodit/doc/
                  }}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={(newContent) =>
                    this.setState({ content: newContent })
                  } // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => {}}
                />
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
