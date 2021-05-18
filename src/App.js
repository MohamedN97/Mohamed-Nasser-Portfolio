import React from 'react';
import Navbar from "./components/Navbar";
import About from './components/About';
import Header from './components/Header';
import styles from './styles.css';
import Particles from "react-particles-js";
//import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
    <>
            <Particles 
                className="particles-canvas"
                params={{
                  particles:{
                    number:{
                      value:30,
                      density:{
                        enable: true,
                        value_area:900
                      }
                    },
                    shape: {
                      type: "circle",
                      stroke:{
                        width: 6,
                        color: "#53c3be"
                      }
                    }
                  }
                }}
          />
          <Navbar />
          <Header />
          <About />
    </>
        
    
  );
}

export default App;
