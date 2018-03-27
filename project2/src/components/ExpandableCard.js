import React, {Component} from 'react';
import {Card, CardText, CardHeader} from 'material-ui/Card';
import * as Typicons from 'react-icons/lib/ti'

const iconStyle = {
  marginBottom: '4px',
  marginRight: '4px',
  color: '#E87722'
};

class ExpandableCard extends Component{

  render(){
    return(
    <Card style={{marginBottom: '8px', paddingTop: '0px'}}>
      <CardHeader
      title={this.props.title}
      subtitle={this.props.subtitle}
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardText expandable={true}><Typicons.TiClipboard size={20} style={iconStyle}/>{'CRN: ' + this.props.crn}</CardText>
      <CardText expandable={true}><Typicons.TiTime size={20} style={iconStyle}/>{'  ' +this.props.time + ' ' + this.props.semester + ', ' + this.props.year}</CardText>
      <CardText expandable={true}><Typicons.TiLocation size={20} style={iconStyle}/>{this.props.location}</CardText>
      <CardText expandable={true}><Typicons.TiThList size={20} style={iconStyle}/>{'Requirements: ' + this.props.reqs}</CardText>
      />
    </Card>
    );

  }

}

export default ExpandableCard;