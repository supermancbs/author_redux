import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from './Author'

const DisplayAuthors = class extends Component {

  render(){
    var authors = this.props.authors.map((author, index) => {
      return <Author key={index} name={author.name}/>
    })
    debugger
    return (
      <div>
        <ul>
          {authors}
        </ul>
      </div>
    )
  }
}

function MapStateToProps(state){
  return {
    authors: state.authors
  }
}

const SmartDisplayAuthors = connect(MapStateToProps)(DisplayAuthors)

export default SmartDisplayAuthors
