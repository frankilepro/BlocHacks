import React from "react";

const API_URL = 'http://teamguenonwebapi.azurewebsites.net/api/todos';
//const API_URL = 'http://localhost:59118/api/todos';

export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      obj: {
        name:""
      }
    }
  }

  componentDidMount() {
    fetch(API_URL)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json);
      /*let names = "";
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
    e.preventDefault();
    this.state.obj.name = $('#input-name').val();
    console.log(this.state.obj);

     fetch(API_URL, {
       mode:"no-cors",
       method:"post",
       body: this.state.obj,
       headers:{
         ContentType:"application/json"
       }
     })
     .then(function(response){
     });

    /*$.ajax({
      url: API_URL,
      type: 'POST',
      mode: "cors",
      dataType: "jsonp",
      contentType: "application/json",
      data: JSON.stringify(this.state.obj), // { "name": "react" },
      success: function() { console.log("boom"); },
      error: function (jqXHR, status) {
        console.log(jqXHR);
      }
    });*/

    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": API_URL,
    //   "method": "POST",
    //   "dataType" : "jsonp",
    //   "headers": {
    //     // "Acces-Control-Allow-Origin": "*",
    //     "content-type":"application/json"
    //   },
    //   "data": this.state.obj
    // }
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
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
