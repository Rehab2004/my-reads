import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//import * as booksApi from './utils/booksApi'

class Home extends Component {
  render() {
    const { library, onChangeShelf } = this.props
    // const {shelf}=this.state
    console.log(library)

    return (
       <div className="container">
         {library.length===0 && <h4>Loading...</h4>}
         {library.length>0 && <div className='container'>
        <h4>currentlyReading</h4>
        
        <div className="row content">
      
          {library.filter((elm) => elm.shelf === 'currentlyReading')
            .map((book) => (
              <div className="card" key={book.id}>
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div className="shelf-changer">
                  <select
                    id="select"
                    value={book.shelf}
                    onChange={(e) => onChangeShelf(book, e.target.value)}
                  >
                    <option value="moveTo" disabled>
                      move to
                    </option>
                    <option value="currentlyReading">currently reading</option>
                    <option value="wantToRead">want to read</option>
                    <option value="read">read</option>
                    <option value="none">none</option>
                  </select>
                </div>
                <div className="book-details">
                  <p>{book.title}</p>
                  <p>{book.authors}</p>
                </div>
              </div>
            ))}
        </div>
        <hr></hr>
        <h4>want to read</h4>
        <div className="row content">
          {library
            .filter((elm) => elm.shelf === 'wantToRead')
            .map((book) => (
              <div className="card" key={book.id}>
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div className="shelf-changer">
                  <select
                    id="select"
                    value={book.shelf}
                    onChange={(e) => onChangeShelf(book, e.target.value)}
                  >
                    <option value="moveTo" disabled>
                      move to
                    </option>
                    <option value="currentlyReading">currently reading</option>
                    <option value="wantToRead">want to read</option>
                    <option value="read">read</option>
                    <option value="none">none</option>
                  </select>
                </div>
                <div className="book-details">
                  <p>{book.title}</p>
                  <p>{book.authors}</p>
                </div>
              </div>
            ))}
        </div>
        <Link to="/search" className="link-add">
          add
        </Link>
        <hr></hr>
        <h4>read</h4>
        <div className="row content ">
          
          {library.filter((elm) => elm.shelf === 'read')
            .map((book) => (
              <div className="card" key={book.id}>
                <img src={book.imageLinks.thumbnail} alt={book.title} />
                <div className="shelf-changer">
                  <select
                    id="select"
                    value={book.shelf}
                    onChange={(e) => onChangeShelf(book, e.target.value)}
                  >
                    <option value="moveTo" disabled>
                      move to
                    </option>
                    <option value="currentlyReading">currently reading</option>
                    <option value="wantToRead">want to read</option>
                    <option value="read">read</option>
                    <option value="none">none</option>
                  </select>
                </div>
                <div className="book-details">
                  <p>{book.title}</p>
                  <p>{book.authors}</p>
                </div>
              </div>
            ))}
            
        </div>
        </div>}
      </div>
       
    )
  }
}
export default Home
