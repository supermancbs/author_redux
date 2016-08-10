import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import bookAdder from '../actions/add_book'

const BookAdder = class extends Component {

  handleSubmit(event) {
    event.preventDefault()
    var authorID = event.target.firstChild.value
    var book = event.target.children[1].value
    event.target.children[1].value = ""
    this.props.bookAdder(book, authorID)

  }
  render() {
    var authors = this.props.authors.map((author) => {
      return <option value={author.id}>{author.name}</option>
    })
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <select>
            {authors}
          </select>
          <input type='text'/>
          <input type='submit'/>
        </form>
      </div>
    )
  }

}
function mapDispatchToProps(dispatch){
  return bindActionCreators({bookAdder: bookAdder}, dispatch)
}

function mapStateToProps(state) {
  return {
    authors: state.authors
  }
}

const SmartBookAdder = connect(mapStateToProps, mapDispatchToProps)(BookAdder)

export default SmartBookAdder
