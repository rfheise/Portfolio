
import './App.css';
import {useEffect, useState} from 'react';
import Memes from './components/Meme/Route'
import Projects from "./components/Projects/Route"
import Blog from './components/Blog/Blog'
import Christmas from "./components/Christmas/Home"
import { QuickBlog } from './components/Blog/QuickBlog';
import BlogHome from './components/BlogHome/Route'
import SEOLinks from "./components/SEOLinks/Route"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import { linkSync } from 'fs';
import API from './api/api';
import {ProjectList} from './components/Projects/Projects';
//link interface for creating links
interface Links {
  short:string
  id:number,
}
function NotFound() {
  useEffect(function(){window.location.replace(API.generateURL("/404"))})
  return (
    <div></div>
  )
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
              Heise
          </a>
      </div>
      <a href = {API.generateURL("/react/projects")} >
          Projects
      </a>
      <a href = {API.generateURL("/resume")} >
          Resume
      </a>
      <a href = {API.generateURL("/react/blog")}>
          Blog
      </a>
   
      {links.map(link => (
         <a key = {link.id} href = {API.generateURL(`/${link.short}`)}>
         {link.short}
      </a>
      ))}
      <div className = "cage"></div>
  </div>
  <div className = "nav-mobile" style = {xStyle} id = "mobile-nav">
      <a href = {API.generateURL("/react/projects")} >
          Projects
      </a>
      <a href = {API.generateURL("/resume")} >
          Resume
      </a>
      <a href = {API.generateURL("/react/blog")}>
          Blog
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
      <Routes>
          <Route path="/meme" element = {<Memes />} />
          <Route path = "/blog" element = {<BlogHome  />} />
          <Route path = "/" element = {<SEOLinks />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/christmas" element = {<Christmas />} />
          {ProjectList.map(project => {
            return (
              <Route path = {`/projects/${project.route}`} key = {project.route}
                element = {<project.component />} /> 
            )
          })}
          <Route path = "/quick_blog/:id" element = {<QuickBlog />} />
          <Route path = "*" element = {<NotFound />} />
      </Routes>
  </Router>
  </div>

  );
}

export default App;
