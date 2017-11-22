import React, { Component } from 'react';
import BookLists from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookLists />
        <BookDetail />
      </div>
    );
  }
}
