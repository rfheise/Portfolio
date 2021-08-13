
import './App.css';
import {useEffect, useState} from 'react';
import Memes from './components/Meme/Route'
import Projects from "./components/Projects/Route"
import Blog from './components/Blog/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
// import { linkSync } from 'fs';
import API from './api/api';
import {ProjectList} from './components/Projects/Projects';
//link interface for creating links
interface Links {
  short:string
  id:number,
}
function App() {
  //initializes menu to be a boolean
  //initializes to true for menu to not display
  const [menu, setMenu] = useState<boolean>(true);
  //initializes link to empty array
  const [links, setLinks] = useState<Links[]>([]);
  //just runs when component mounts
  useEffect(function() {
    //fetches all dynamic links from the django server
    (async function() {
      let result = await API.queryJson({route:"links"})
      for(let i = 0; i < result.length; i++) {
        result[i].id = i;
      }
      //updates link array to be dynamic links from server
      setLinks(result)
    })()
  },[]) 
  //use to flip state for mobile support
  //flips hamburger menu for mobile
  function flipper() {
    setMenu(menu => (!menu))
  }
  let menuStyle:any = {}
  let xStyle:any =  {display:"none"} 
  //sets style for menu 
  //display menu if user clicked on the hamburger icon
  // "closes menu if user clicks the x"
  if(!menu) {
    let temp = menuStyle
    menuStyle = xStyle
    xStyle = temp;
  }

  return (
    
    <div>
    <div className = "navbar">
      <img onClick = {flipper} src = {API.generateURL("/static/images/hamburger-menu.png")} className = "homburger-menu" style = {menuStyle} id = "menu" alt = "menu" />
      <img onClick = {flipper} src = {API.generateURL("/static/images/x.png")} className = "homburger-menu" style = {xStyle} id = "x" alt = "close menu"/>
      <div className = "header-nav">
          <a href = "/" >
              127.0.0.1
          </a>
      </div>
      <a href = {API.generateURL("/construction")} >
          Projects
      </a>
      <a  href = {API.generateURL("/blog")}>
          Blog
      </a>
      <a href = {API.generateURL("/resume")} >
          Resume
      </a>
      <a href = {API.generateURL("/homburger")}>
          Homburger
      </a>
      {links.map(link => (
         <a key = {link.id} href = {API.generateURL(`/${link.short}`)}>
         {link.short}
      </a>
      ))}
      <div className = "cage"></div>
  </div>
  <div className = "nav-mobile" style = {xStyle} id = "mobile-nav">
      <a href = {API.generateURL("/react/memes")} >
          Projects
      </a>
      <a href = {API.generateURL("/blog")}>
          Blog
      </a>
      <a href = {API.generateURL("/resume")} >
          Resume
      </a>
      <a href = {API.generateURL("/homburger")}>
          Homburger
      </a>
      {links.map(link => (
         <a key = {link.id} href = {API.generateURL(`/${link.short}`)}>
         {link.short}
      </a>
      ))}
  </div>
  <div className ="nav-mobile-blank" style = {xStyle} id = "blank-overlay">
  </div>
    <Router basename = "/react">
      <Switch>

          <Route exact path="/meme">
            <Memes />
          </Route>
          <Route exact path = "/blog">
            <Blog title = "blog" image = "/null" />
          </Route>
          
          <Route exact path = "/projects">
            <Projects />
          </Route>
          {ProjectList.map(project => {
            return (
              <Route exact path = {`/projects/${project.route}`}>
                <project.component />
              </Route>
            )
          })}
          <Route path = "*">
            {/* temporary fix returns a "component" that just redirects*/}
            {() => {
              window.location.href = API.generateURL("/404")
              return null;
          }}
          </Route>
      </Switch>
  </Router>
  </div>

  );
}

export default App;
