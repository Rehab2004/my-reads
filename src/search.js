//import logo from './logo.svg';

import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import * as booksApi from './utils/booksApi'

class Search extends Component {
  state = {
    query: '',
    books: [],
    selectValue:''
  }

  handleSearch = (query) => {
    this.setState(
      {
        query: query
      },
      () => {
            if(query){
          booksApi.search(query).then((books) => {
            if(Array.isArray(books)){
              
              const { library } = this.props
              this.setState({
              
                
               books: books.map(book=>{
                 if(!( 'shelf' in book )){
                   book.shelf='none'
                 }
                  if( library.some( b=>b.id===book.id)){
                    const value= library.filter(ele=>ele.id===book.id)
                     console.log(value)
                     console.log(value[0].shelf)
                    book.shelf=value[0].shelf
                    
                  }
             
                  return book
                })
              })
            }
            
          })
        }
      }
    )
  }
 

  render() {
  
    const { onAddBook } = this.props
    const { query } = this.state
    const { books } = this.state
   // console.log(books)
    console.log(query)
    const showBooks = query===''?null:books.filter(book=>book.title.toLowerCase().includes(query.toLowerCase()))
   
    console.log(showBooks)

    return (
      <div className="container">
        <div className="row" style={{ marginTop: '20px' }}>
          <Link to="/" className="link-back">
            back
          </Link>
          <input
            className="search-input"
            value={query}
            placeholder="search by title or author"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
        </div>
        {showBooks && showBooks.length===0 &&<h6>No matced query</h6>}
        <div className="row search-content">
      {showBooks && showBooks.length>0 &&
            showBooks.map((book) => (
              
              <div className="card" key={book.id}>
                <img src={book.imageLinks && book.imageLinks.thumbnail?book.imageLinks.thumbnail:''} alt={book.title} />
                <div className="book-details">
                  <p>{book.title}</p>
                  <p>{ book.authors && book.authors.join(',')}</p>
                </div>
                <div className="shelf-changer">
                  <select
                    id="select"
                     value={book.shelf}
                    onChange={(e) => onAddBook(book, e.target.value)}
                  >
                    <option value="moveTo">
                      Move to
                    </option>
                    <option value="currentlyReading">currently reading</option>
                    <option value="wantToRead">want to read</option>
                    <option value="read">read</option>
                    <option value="none">none</option>
                  </select>
                </div>
              </div>
            ))}
            
        </div>
        
      </div>
    )
  }
}
export default Search
