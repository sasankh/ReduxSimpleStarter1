import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

//Anything returned from this functions will endup as props on the Booklist container
function mapDispatchToProps(dispatch) {
  //whenever seletBook is called. the result should be passed to al of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from Component to a container - it needs to know about this new dispatch method, selectBook, Make is available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
