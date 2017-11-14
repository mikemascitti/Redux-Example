import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    listOfBooks: BooksReducer
});

export default rootReducer;
