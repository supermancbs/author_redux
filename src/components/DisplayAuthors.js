import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from './Author'
import DisplayBooks from './DisplayBooks'

const DisplayAuthors = class extends Component {

  render(){
    var authors = this.props.authors.map((author, index) => {
      return (
        <div>
          <Author name={author.name}/>
          <DisplayBooks authorID={author.id}/>
        </div>
      )
    })

    return (
      <div>
        <ul>
          {authors}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authors: state.authors
  }
}

const SmartDisplayAuthors = connect(mapStateToProps)(DisplayAuthors)

export default SmartDisplayAuthors
