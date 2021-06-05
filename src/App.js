//import logo from './logo.svg';
import './App.css'
import React, { Component } from 'react'
import Home from './Home'
import PropTypes from 'prop-types'
import Search from './search'
import { Route } from 'react-router-dom'

import * as booksApi from './utils/booksApi'

class App extends Component {
  PropTypes = {
    library: PropTypes.array.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired
  }
  state = {
    library: [],
    shelf: ''
  }
  componentDidMount() {
    booksApi.getAll().then((books) => {
      console.log(books)
      this.setState({
        library: books
      })
    })
    console.log(this.state.library)
  }

  handleUpdate = (book, shelf) => {
     console.log(shelf)
    booksApi.update(book, shelf)
      this.setState((currentState)=>({
        //mohamed elzanaty
        //library:[...this.state.library.filter(b=>b.id!==book.id),book]
        library:currentState.library.map(b=>{
          if(b.id===book.id){
            return Object.defineProperty(b, "shelf", {value : shelf});
          }else{return b}
        })
      }))
             //  console.log(this.state.books)
    
    
  }


  addBook = (book, shelf) => {
    booksApi.update(book, shelf)
    this.setState((currentState) => ({
      library: currentState.library.concat([{ ...book, shelf: shelf }])
    }))
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="container">
            <h1>My Read</h1>
          </div>
        </header>
        <Route
          path="/search"
          render={() => (
            <Search onAddBook={this.addBook} library={this.state.library} />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <Home
              library={this.state.library}
              onChangeShelf={this.handleUpdate}
            />
          )}
        />
      </div>
    )
  }
}

export default App
