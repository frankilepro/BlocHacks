import React from "react";

export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "null"
    }
  }

  componentDidMount() {
    $.getJSON("http://teamguenonwebapi.azurewebsites.net/api/todos", function(json){
      console.log(json);
      var names = "";
      for(var i = 0; i < 10; i++){
        names = names + json[i].name + ", ";
      }
      this.setState({
        data: names
      });
    }.bind(this));
  }

  render() {

    return (
      <div>
        <h1>Data</h1>
        <div class="row">
          {this.state.data}
        </div>
      </div>
    );
  }
}
