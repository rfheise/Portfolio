
import './App.css';
import {useEffect, useState} from 'react';
import Memes from './components/Meme/Route'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { linkSync } from 'fs';
import API from './api/api';
interface Link {
  show:boolean,
  link:string
}
function App() {
  const [menu, setMenu] = useState<boolean>(true);
  const [links, setLinks] = useState<Link[]>([]);
  useEffect(function() {
    (async function() {
      let result = await API.queryJson({route:"links"})
      setLinks(result)
    })()
  },[]) 
  function flipper() {
    setMenu(menu => (!menu))
  }
  let menuStyle:any = {}
  let xStyle:any =  {display:"none"} 
  if(!menu) {
    let temp = menuStyle
    menuStyle = xStyle
    xStyle = temp;
  }

  return (
    
    <div>
    <div className = "navbar">
      <img onClick = {flipper} src = "http://127.0.0.1:8000/static/images/hamburger-menu.png" className = "homburger-menu" style = {menuStyle} id = "menu"/>
      <img onClick = {flipper} src = "http://127.0.0.1:8000/static/images/x.png" className = "homburger-menu" style = {xStyle} id = "x"/>
      <div className = "header-nav">
          <a href = "/" >
              127.0.0.1
          </a>
      </div>
      <a href = "http://127.0.0.1:8000/construction" >
          Projects
      </a>
      <a  href = "http://127.0.0.1:8000/blog">
          Blog
      </a>
      <a href = "http://127.0.0.1:8000/resume" >
          Resume
      </a>
      <a href = "http://127.0.0.1:8000/homburger">
          Homburger
      </a>
      {links.map(link => (
         <a href = {API.generateURL(`/${link.short}`)}>
         {link.short}
      </a>
      ))}
      <div className = "cage"></div>
  </div>
  <div className = "nav-mobile" style = {xStyle} id = "mobile-nav">
      <a href = "http://127.0.0.1:8000/construction" >
          Projects
      </a>
      <a href = "http://127.0.0.1:8000/blog">
          Blog
      </a>
      <a href = "http://127.0.0.1:8000/resume" >
          Resume
      </a>
      <a href = "http://127.0.0.1:8000/homburger">
          Homburger
      </a>
      {links.map(link => (
         <a href = {API.generateURL(`/${link.short}`)}>
         {link.short}
      </a>
      ))}
  </div>
  <div className ="nav-mobile-blank" style = {xStyle} id = "blank-overlay">
  </div>
    <Router>
      <Switch>
          <Route exact path="/meme">
            <Memes />
          </Route>
      </Switch>
  </Router>
  </div>

  );
}

export default App;
