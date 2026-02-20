// src/components/App.js
import React from "react";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      
      <section id="home">
        <h2>Home</h2>
        <p>This is the home section.</p>
      </section>
      
      <section id="about">
        <h2>About</h2>
        <p>This is the about section.</p>
      </section>
    </>
  );
}

export default App;