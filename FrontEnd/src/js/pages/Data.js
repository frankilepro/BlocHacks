import React from "react";

const API_URL = 'https://teamguenonwebapi.azurewebsites.net/api/todos';
//const API_URL = 'http://localhost:59118/api/todos';

export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    fetch(API_URL)
    .then(function(response){
      return response.json();
    })
    .then(function(json){ 
      console.log(json);
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
    e.preventDefault();

    var jsonobj = {};
    jsonobj.name = $('#input-name').val();

    console.log(JSON.stringify(jsonobj));

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": API_URL,
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "data": JSON.stringify(jsonobj)
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });

    location.reload();
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
