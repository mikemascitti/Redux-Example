import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((bookObj) => {
      return(
        <li key={bookObj.title} className="list-group-item" > {bookObj.title} </li>

      );


    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned will show up as props
  // inside of book list.
  return {
    //the connect function causes this object to be a property of the Component

    books: state.listOfBooks  //state.listOfBooks was created in the index.js from the data in the reducer.
    //the reducer_books applied the prop of title to each item in this state.
  };

}
//Why don't we have to pass in a parameter into mapStateToProps?  it takes one!

export default connect(mapStateToProps)(BookList);
