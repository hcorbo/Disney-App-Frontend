import React from "react";
import {Content} from "./components/content/Content";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Content/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
