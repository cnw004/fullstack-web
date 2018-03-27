import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
 
class SearchContainer extends Component{

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      array: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    
  }

handleSearch(){
  var queryString = "https://www.eg.bucknell.edu/~amm042/service/q?";
  if(this.state.text === ""){
    queryString += "limit='9999'"
  }
  else if(this.state.text.indexOf("crn") >= 0){
    queryString += "CRN=" + this.state.text.split(' ')[1];
  }
  //if not a CRN search
  else{
      queryString += "&text='" + this.state.text + "'";
    }
  
  
  fetch(queryString)
      .then(response => response.json())
      .then(data => {
                  this.props.onResultsReceived(data.message);
                  this.props.onTextReceived(this.state.text)});
}
  

  handleChange(input){
    this.setState({text: input});
  }

  render() {
    return(
      <SearchBar
        onChange={this.handleChange}
        onRequestSearch={this.handleSearch}
        style={{
          margin: '0 auto',
          width: '95%'
        }}
      />
    )
  }
}

export default SearchContainer;