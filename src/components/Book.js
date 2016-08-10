import React from 'react';
import DeleteButton from './DeleteButton'


const Book = ({name, bookId}) => {
  return (
    <div>
      <li>{name}</li><DeleteButton bookId={bookId}/>
    </div>

  )
}

export default Book
