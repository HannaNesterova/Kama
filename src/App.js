import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return(
    <div className="app-wrapper ">
      <Header />
      <Nav />
      <div className="content">
        <div>
          <img src="https://images.unsplash.com/photo-1653503873090-345317938c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" />
        </div>

        <div>
          my post
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
            <div>
              post 3
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
