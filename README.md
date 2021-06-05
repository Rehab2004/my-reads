
<h4>TO START REACT APP</h4>

  1- in directory install npm
       <p>npm install </p>

 2- instal yarn pakage
      <p> npm install --global yarn</p>

 3-check installion of yarn
      <p> yarn --version</p>
       <p> details here "https://classic.yarnpkg.com/en/docs/install#windows-stable"</p>

4-install create-react-app package gloably (through the command-line with npm)
   <p> npm install -g create-react-app</p>

5- now we have creat-react-app command avaliable in the terminal to creat an app called project_react
      <p>creat-react-app project_react</p>
<p> it will install react package ,react-dom and react script</span> which install Bable and</p>

6-run development server
  <p>yarn start</p>

7-now start to build app with parent component called App in file App.js 
  <p> import {React,Component} from'react'</p>
  
   <p> class App extends Component</p> then export the App
     <p>export default App </p>

8- in file index.js import App to render it in DOM
  <div>  
    <p> import React from 'react'</p>
<p>import ReactDOM from 'react-dom'</p>
<p>import 'bootstrap/dist/css/bootstrap.css'</p>
<p>import './index.css'</p>
<p>import App from './App'</p>

</div>
<div>
  ReactDOM.render(
    <App />
  document.getElementById('root')
)</div>

9-now App is renderd ,start to build other compnent ,creat Home component in file Home.js 
   
   <p>import {React,Component} from 'react'</p>
   
<p>class Home extends Component</p>
 then export Home component and import it in App.js to render in Dom
   <p> render(){
       return (
           <Home/>
       )
   }
  </p>
  10-creat new component Search in file search.js and export it then import it in App.js
  
  11-now we have the basic structur for app ,we need to build functions 

  12-in App set state library it ia an empty array,
    with lifecycle event componentDidMount and request get  the books will loaded when App is rendered to Dom
      then setState to update state library
      <p> this.setState({library:books})</p>
   
 13-in Home.js filter library according shelf to creat three shelves on screen
     <p>currentlyReading</p>
     <p>wantToRead</p>
     <p>read</p>
     each shelf has some cards ,each card represents a book from the library with image and some details about book
  14-add Link to navigate to another component Search

  15-in search.js set state query with initiate value '',
       and books,it is an empty array 
       with query equal the value of input search we can use it to get books from Api
       ,then setState to update state books 
       <p>this.setState({books:books})</p>
  16-filter books to show them on screen 
  17-add Link to navigate to Home component
  18-wrap App with BrowserRouter to handel navigation between components 
  19-wrap each component with Route this route carry the path of it's component
  20-add function to update the book shelf , and add book in App.js and add them to the components as props 

  