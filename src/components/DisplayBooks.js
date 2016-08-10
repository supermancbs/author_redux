import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from './Book'

const DisplayBooks = class extends Component {


  render(){

    var storeBooks = this.props.books.filter((book) => {
      return parseInt(book.authorID)===this.props.authorID
    }, this)
    var books = storeBooks.map((book, index) => {return <Book bookId={book.id} name={book.name}/> })

    return(
      <div>
        <ul>
          {books}
        </ul>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    books: state.books
  }
}

const SmartDisplayBooks = connect(mapStateToProps)(DisplayBooks)

export default SmartDisplayBooks
