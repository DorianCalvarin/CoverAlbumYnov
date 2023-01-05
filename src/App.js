import React from 'react';
import logo from './logo.svg';
import './astyle.css';
import Header from './components/Header.js';
import styled from 'styled-components';

function App() {
  return (
    <Element>
      <div className="App">
        <Header></Header>
      </div>
    </Element>
  );
}

const Element = styled.div`
  .App {
    background-color: red;
  }
;`


export default App;
