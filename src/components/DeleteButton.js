import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteBook from '../actions/delete_book'

const DeleteButton = class extends Component {

  deleteNow(){
    event.preventDefault()
    this.props.deleteBook(this.props.bookId)

  }
  render(){
    return(
      <button onClick={this.deleteNow.bind(this)}>Delete</button>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteBook: deleteBook}, dispatch)
}

const SmartDeleteButton = connect(null, mapDispatchToProps)(DeleteButton)

export default SmartDeleteButton
