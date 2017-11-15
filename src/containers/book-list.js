import React, { Component } from 'react';
import { connect } from 'react-redux';

//BookList is a container because it needed to be aware of the application level state
// -- the state set in index.js reducer.
class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

  renderList(){
    return this.props.books.map((bookObj) => {
      return(
        <li key={bookObj.spot} className="list-group-item" > {bookObj.spot} - {bookObj.title} </li>
      );
    });
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
