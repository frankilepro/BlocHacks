import React from "react";

export default class Data extends React.Component {
  componentDidMount() {
    fetch('http://teamguenonwebapi.azurewebsites.net/api/todos')
    .then(data => {
      console.log(data);
    })
  }

  render() {

    return (
      <div>
        <h1>Data</h1>
        <div class="row">
        </div>
      </div>
    );
  }
}
