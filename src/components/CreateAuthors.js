import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addAuthor from '../actions/add_author'


const CreateAuthor = class extends Component {

  handleSubmit(event) {
    event.preventDefault()
    var author = event.target.firstChild.value
    this.props.addAuthor(author)
    event.target.firstChild.value = ""
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='Create an Author'/>
          <input type='submit' value='Create'/>

        </form>

      </div>
    )
  }

}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addAuthor: addAuthor}, dispatch)
}

const SmartCreateAuthor = connect(null, mapDispatchToProps)(CreateAuthor)

export default SmartCreateAuthor
