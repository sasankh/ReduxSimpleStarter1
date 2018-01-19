export function selectBook(book) {
  //select book is an action create and needs to return an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
