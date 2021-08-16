import React, { Component } from "react";



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


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
      Name: null,
      Mobilenumber: null,
      email: null,

      Message: null,
      formErrors: {
        Name: "",
        Mobilenumber: "",
        email: "",
        Vehicleinfo: "",
        Message: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Name: ${this.state.Name}
        Mobilenumber: ${this.state.Mobilenumber}
        Email: ${this.state.email}

        Vehicle-Overview: ${this.state.Mobilenumber}
        Message: ${this.state.Message}
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
      case "Name":
        formErrors.Name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Mobilenumber":
        formErrors.Mobilenumber =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "invalid email address";
          break;
      case "Message":
        formErrors.Message =
          value.length < 100 ? "minimum 100 characaters required" : "";
        break;
        case "Vehicleinfo":
          formErrors.Message =
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
              <div className="Name">
                <label htmlFor="Name">Name</label>
                <input
                  className={formErrors.Name.length > 0 ? "error" : null}
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
              <div className="Mobilenumber">
                <label htmlFor="Mobilenumber">Mobilenumber</label>
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
              <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
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
              <div className="Vehicleinfo">
                <label htmlFor="Vehicleinfo">Vehicleinfo</label>
                <input
                  className={formErrors.Vehicleinfo.length > 0 ? "error" : null}
                  placeholder="Vehicleinfo"
                  type="text"
                  name="Vehicleinfo"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.Vehicleinfo.length > 0 && (
                  <span className="errorMessage">{formErrors.Vehicleinfo}</span>
                )}
              </div>
              <div className="Message">
                <label htmlFor="Message">Message</label>
                <input
                  className={formErrors.Message.length > 0 ? "error" : null}
                  placeholder="Message"
                  type="Message"
                  name="Message"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.Message.length > 0 && (
                  <span className="errorMessage">{formErrors.Message}</span>
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

export default contact;
