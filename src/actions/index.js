

export function selectBook(aBook) {
  //export the function so we can use it
  //console.log('A book ', aBook.title);


  //selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED' ,
    payload: book
  };

}
