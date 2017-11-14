import { combineReducers } from 'redux';
import BooksReducerYo from './reducer_books';

const rootReducer = combineReducers({
    listOfBooks: BooksReducerYo
});

export default rootReducer;
