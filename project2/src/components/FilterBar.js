import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { subjects, requirements, years, semesters } from './Const.js';
import RaisedButton from 'material-ui/RaisedButton';



const subjectsList = [];
for (let i = 0; i < subjects.length; i++ ) {
  var subject = subjects[i].value;
  var display = subjects[i].display;
  subjectsList.push(<MenuItem value={i} key={subject} primaryText={display}/>);
}

const requirementList =[];
for (let i = 0; i < requirements.length; i++ ) {
  subject = requirements[i].value;
  display = requirements[i].display;
  requirementList.push(<MenuItem value={i} key={subject} primaryText={display}/>);
}

const semestersList = [];
for (let i = 0; i < semesters.length; i++ ) {
  subject = semesters[i].value;
  display = semesters[i].display;
  semestersList.push(<MenuItem value={i} key={subject} primaryText={display}/>);
}

const yearsList = [];
for (let i = 0; i < years.length; i++ ) {
  subject = years[i].value;
  display = years[i].display;
  yearsList.push(<MenuItem value={i} key={subject} primaryText={display}/>);
}



class FilterBar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      subjectValue: 1,
      requirementValue: 1,
      semesterValue: 1,
      yearValue: 1,
      subject: 'ACFM',
      requirement: 'ARHC',
      semester: 'Fall',
      year: '2018'
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(){
    var queryString = "https://www.eg.bucknell.edu/~amm042/service/q?";
    if(this.props.text === ''){
      queryString += "limit='9999'"
    }
    else{
      queryString = "https://www.eg.bucknell.edu/~amm042/service/q?text='" + this.props.text + "'";
    }
    if(this.state.subject !== ''){
      queryString += "&Department=" + this.state.subject;
    }
    if(this.state.requirement !== ''){
      queryString += "&CCCReq=" + this.state.requirement;
    }

    if(this.state.semester !== ''){
      queryString += "&Semester=" + this.state.semester;
    }
    if(this.state.year !== ''){
      queryString += "&Year=" + this.state.year;
    }

    // queryString += "&limit=999"
    fetch(queryString)
      .then(response => response.json())
      .then(data => {
                    this.props.onResultsReceived(data.message);
                    });
  }

  

  handleSubjectChange = (event, index, value) => {                                 
                                            this.setState({
                                              subjectValue: value, 
                                              subject: subjectsList[value].key
                                            });
                                          };

handleRequirementChange = (event, index, value) => {
                                            this.setState({
                                              requirementValue: value, 
                                              requirement: requirementList[value].key
  });
};

handleSemesterChange = (event, index, value) => {
  this.setState({
    semesterValue: value, 
    semester: semestersList[value].key
  });
};

handleYearChange = (event, index, value) => {
  this.setState({
    yearValue: value, 
    year: yearsList[value].key
  });
};



  render() {
    return (
      <div style={{width: '95%', margin: 'auto', display: 'flex', alignItems: 'middle', marginTop: '8px', marginBottom: '16px'}}>
        
        <SelectField maxHeight={300} floatingLabelText='Subjects' value={this.state.subjectValue} onChange={this.handleSubjectChange} style={{width: '20%', marginRight: '8px'}}>
          {subjectsList}
        </SelectField>

        <SelectField maxHeight={300} floatingLabelText='Requirements' value={this.state.requirementValue} onChange={this.handleRequirementChange} style={{width: '20%', marginRight: '8px'}}>
          {requirementList}
        </SelectField>

        <SelectField maxHeight={300} floatingLabelText='Semester' value={this.state.semesterValue} onChange={this.handleSemesterChange} style={{width: '20%', marginRight: '8px'}}>
          {semestersList}
        </SelectField>

        <SelectField maxHeight={300} floatingLabelText='Year' value={this.state.yearValue} onChange={this.handleYearChange} style={{width: '20%', marginRight: '8px'}}>
          {yearsList}
        </SelectField>

        <RaisedButton onClick={this.handleFilter} label="Filter" style={{verticalAlign: 'middle', width: '20%', height: '36px', marginTop: '28px'}}/>
      </div>
    );
  }
  
}

export default FilterBar;