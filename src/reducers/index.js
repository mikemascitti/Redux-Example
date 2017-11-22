import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    listOfBooks: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
