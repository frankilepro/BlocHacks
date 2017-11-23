import React from "react";

export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      obj: {
        "name":""
      }
    }
  }

  componentDidMount() {
    fetch('http://teamguenonwebapi.azurewebsites.net/api/todos')
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      /*console.log(json);
      let names = "";
      for(var i = 0; i < json.length; i++){
        names = names + json[i].name + ", ";
      }*/
      this.setState({
        data: json
      })
    }.bind(this))
  }

  showData(){
    let rows = [];
    let data = this.state.data;
    for(var i = 0; i < data.length; i++){
      let text = "name: " + data[i].name + ", id : " + data[i].id;
      rows.push(<h1 key={i} style={{backgroundColor:"yellow"}}>{text}<br></br></h1>);
    }
    return <div>{rows}</div>;
  }

  onSubmit = (e) => {
    this.state.obj.name = $('#input-name').val();
    console.log(this.state.obj);

    /*fetch("http://teamguenonwebapi.azurewebsites.net/api/todos", {
      method:"post",
      "crossDomain": true,
      header : {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
        "Acces-Control-Allow-Origin": "*"
      },
      data: this.state.obj
    });*/



    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://teamguenonwebapi.azurewebsites.net/api/todos",
      "method": "POST",
      "dataType" : "json",
      "headers": {
        "Acces-Control-Allow-Origin": "*",
        "content-type":"application/json"
      },
      "data": this.state.obj
    }
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }

  render() {

    return (
      <div>
        <h1>Data</h1>
        <form onSubmit={this.onSubmit}>
          <div>Name: <input type="text" id="input-name" onchange={this.updateName}/></div>
          <button type="submit">Post</button>
        </form>
        <div class="row">
          {this.showData()}
        </div>
      </div>
    );
  }
}
