// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from './App'
import { unmountComponentAtNode } from 'react-dom'
import Home from '../src/Home'
import Search from '../src/search'
import { getAll, search } from '../src/utils/booksApi'

let container = null
beforeEach(() => {
  //setup a DOM element
  container = document.createElement('div')
  document.body.appendChild(container)
})
afterEach(() => {
  //delete node
  unmountComponentAtNode(container)
  container.remove()
  container = null
})
test('fetch data when App mounted', () => {
  render(
    <BrowserRouter>
      <App
        state={[]}
        fetch={getAll().then((books) => {
          state = books
        })}
      />
    </BrowserRouter>
  )
})

//search data from api by query
test('search data', () => {
  render(
    <BrowserRouter>
      <App />
      <Search query="jva" />
    </BrowserRouter>
  )
})

test(' it renders Home component', () => {
  render(
    <BrowserRouter>
      <App />
      <Route
        exact
        path="/"
        render={() => (
          <Home
            library={[
              {
                id: 'polkiu',
                title: 'Javascript',
                authors: ['xxx'],
                imageLinks: { thumbnail: 'https://' },
                shelf: 'currentlyReading'
              }
            ]}
          />
        )}
      />
    </BrowserRouter>
  )
})
