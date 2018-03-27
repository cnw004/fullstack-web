import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './assets/bucknell-logo.png';
import './css/App.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SearchContainer from './components/SearchContainer.js';
import FilterBar from './components/FilterBar';
import ExpandableCard from './components/ExpandableCard';

const muiTheme = getMuiTheme({
  "palette": {
      "primary1Color": '#2196f3',
      "primary2Color": '#1976d2',
      "accent1Color": '#f57c00',
      "pickerHeaderColor": '#2196f3'
  },
  "tabs": {
      "backgroundColor": '#f5f5f5',
      "textColor": '#2196f3',
      "selectedTextColor": '#ef6c00'
  }
});


class App extends Component {

  constructor(props){
    super(props);
    this.state = {results: [],
      text: ''
    }
  }
  onResultsReceived(results){
    //pass as prop into search bar, send it back up somehow
    this.setState({results}, () => console.log(this.state) )
  }

  onTextReceived(text){
    this.setState({text}, () => console.log(this.state))
  }

  checkLocation(item){
    return((item.Room === '') ? 'TBD' : item.Room); 
  }

  checkRequirements(item){
    return (item.Notes.length === 0) ? 'None' : item.Notes[0];
  }

  render() {
    return (
      <MuiThemeProvider muiTheme = { muiTheme } >
        <div>
          <span className="Banner">
            <h1 style={{marginTop: '24px', marginLeft: '24px'}}>Bucknell Course Lookup</h1>
            <img src={logo} id="Logo" alt="logo" />
          </span>
          <SearchContainer onResultsReceived={(results) => this.onResultsReceived(results)}
             onTextReceived={(text) => this.onTextReceived(text)} 
             style={{width: '80%', position: 'absolute', marginLeft: '4px'}}
          />

          <FilterBar onResultsReceived={(results) => this.onResultsReceived(results)}
            text={this.state.text}/>

          <div id="cards" style={{width: '95%', margin: 'auto'}}>
            {this.state.results.map((item) => <ExpandableCard 
                                                key={item.CRN + item.Department} 
                                                title={item.Title + ' - ' + item.Course} 
                                                subtitle={item.Instructor} 
                                                crn={item.CRN}
                                                time={item["Meeting Time"]}
                                                semester={item.Semester}
                                                year={item.Year}
                                                location={this.checkLocation(item)}
                                                reqs={this.checkRequirements(item)}/>)}
          </div>
        </div>
      </MuiThemeProvider>
      

    );
  }
}

export default App;
