<<<<<<< HEAD
import React from "react";

export default class CenterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    /*
    handleChange: function (propertyName, event) {
        const contact = this.state.contact;
        contact[propertyName] = event.target.value;
        this.setState({ contact: contact });
      },
    */

    handleChange(propertyName, event) {
      this.setState({value: event.target.value});
      console.log(event.target.value)
    }
  
    handleSubmit(event) {
     console.log('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <h1>Center</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
=======
import React from "react";

export default class CenterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    /*
    handleChange: function (propertyName, event) {
        const contact = this.state.contact;
        contact[propertyName] = event.target.value;
        this.setState({ contact: contact });
      },
    */

    handleChange(propertyName, event) {
      this.setState({value: event.target.value});
      console.log(event.target.value)
    }
  
    handleSubmit(event) {
     console.log('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <h1>Center</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
>>>>>>> 8c35acbe0aca15e0051d097fdf56d78c8d3522af
  }