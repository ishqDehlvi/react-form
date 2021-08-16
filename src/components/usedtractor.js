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
      registrationyear: null,
      chassisnumber: null,
      Enginenumber: null,
      RCnumber: null,
      Exchangevalue: null,
      otsalecommitment: null ,
      ReceivedAmount: null ,
      OwnerName: null,
      Exchangedby: null,
      VehicleOverview: null,
      VehicleFeatures: null,
      formErrors: {
        Brand: "",
        Model: "",
        Variant: "",
        Hp: "",
        registrationyear: "",
        chassisnumber: "" ,
        Enginenumber: "",
        Exchangevalue: "",
        otsalecommitment: "",
        RCnumber: "",
        ReceivedAmount: "",
        OwnerName: "",
        Exchangedby: "",
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
        Variant: ${this.state.Variant}
        Hp: ${this.state.Hp}
        registrationyear: ${this.state.registrationyear}
        chassisnumber: ${this.state.chassisnumber}
        Enginenumber: ${this.state.Enginenumber}
        RCnumber: ${this.state.RCnumber}
        Exchangevalue: ${this.state.Exchangevalue}
        otsalecommitment: ${this.state.otsalecommitment}
        ReceivedAmount: ${this.state.ReceivedAmount}
        OwnerName: ${this.state.OwnerName}
        Vehicle-Overview: ${this.state.VehicleOverview}
        VehicleFeatures: ${this.state.VehicleFeatures}
        Exchangedby: ${this.state.Exchangedby}
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
            <h1>Used Tractor Form</h1>
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
              <div className="registrationyear">
                <label htmlFor="registrationyear">RegistrationYear</label>
                <input
                  className={formErrors.registrationyear.length > 0 ? "error" : null}
                  placeholder="Registration Year"
                  type="number"
                  name="registrationyear"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.registrationyear.length > 0 && (
                  <span className="errorMessage">{formErrors.Hp}</span>
                )}
              </div>
              <div className="chassisnumber">
                <label htmlFor="chassisnumber">Chassis Number</label>
                <input
                  className={formErrors.chassisnumber.length > 0 ? "error" : null}
                  placeholder="chassisnumber"
                  type="text"
                  name="chassisnumber"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.chassisnumber.length > 0 && (
                  <span className="errorMessage">{formErrors.chassisnumber}</span>
                )}
              </div>
              <div className="Enginenumber">
                <label htmlFor="Enginenumber">Engine Number</label>
                <input
                  className={formErrors.Enginenumber.length > 0 ? "error" : null}
                  placeholder="Enginenumber"
                  type="text"
                  name="Enginenumber"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.Enginenumber.length > 0 && (
                  <span className="errorMessage">{formErrors.Enginenumber}</span>
                )}
              </div>
              <div className="RCnumber">
                <label htmlFor="RCnumber">RC number</label>
                <input
                  className={formErrors.RCnumber.length > 0 ? "error" : null}
                  placeholder="RCnumber"
                  type="text"
                  name="RCnumber"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.RCnumber.length > 0 && (
                  <span className="errorMessage">{formErrors.RCnumber}</span>
                )}
              </div>
              <div className="Exchangevalue">
                <label htmlFor="Exchangevalue">Exchangevalue</label>
                <input
                  className={formErrors.Exchangevalue.length > 0 ? "error" : null}
                  placeholder="Exchangevalue"
                  type="text"
                  name="Exchangevalue"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.Exchangevalue.length > 0 && (
                  <span className="errorMessage">{formErrors.Exchangevalue}</span>
                )}
              </div>
              <div className="otsalecommitment">
                <label htmlFor="otsalecommitment">Ot Sale Commitment</label>
                <input
                  className={formErrors.otsalecommitment.length > 0 ? "error" : null}
                  placeholder="otsalecommitment"
                  type="text"
                  name="otsalecommitment"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.otsalecommitment.length > 0 && (
                  <span className="errorMessage">{formErrors.otsalecommitment}</span>
                )}
              </div>
              <div className="ReceivedAmount">
                <label htmlFor="ReceivedAmount">Received Amount</label>
                <input
                  className={formErrors.ReceivedAmount.length > 0 ? "error" : null}
                  placeholder="ReceivedAmount"
                  type="text"
                  name="ReceivedAmount"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.ReceivedAmount.length > 0 && (
                  <span className="errorMessage">{formErrors.ReceivedAmount}</span>
                )}
              </div>
              <div className="OwnerName">
                <label htmlFor="OwnerName">Owner Name</label>
                <input
                  className={formErrors.OwnerName.length > 0 ? "error" : null}
                  placeholder="OwnerName"
                  type="text"
                  name="OwnerName"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.OwnerName.length > 0 && (
                  <span className="errorMessage">{formErrors.OwnerName}</span>
                )}
              </div>
              <div className="Exchangedby">
                <label htmlFor="Exchangedby">Exchanged by</label>
                <input
                  className={formErrors.OwnerName.length > 0 ? "error" : null}
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
              <div className="Mobilenumbernumber">
                <label htmlFor="Mobilenumber">Mobile number</label>
                <input
                  className={formErrors.Mobilenumber.length > 0 ? "error" : null}
                  placeholder="Mobilenumber"
                  type="text"
                  name="Mobilenumber"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.Mobilenumber.length > 0 && (
                  <span className="errorMessage">{formErrors.Mobilenumber}</span>
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

export default usedtractor;
