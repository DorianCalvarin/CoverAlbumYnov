import React from 'react';
import logo from './logo.svg';
import './Creationalbum.css';
import './flip.css';
import Flip from './components/Flip';
import Creationalbum from './components/Creationalbum';

function App() {
  const [ModifPage, setModifPage] = React.useState("Flip");

  return (
    <div className='App'>
    {ModifPage === "Flip" && <Flip setModifPage={setModifPage}></Flip>}
    {ModifPage === "Creationalbum" && <Creationalbum setModifPage={setModifPage}></Creationalbum>}
    </div>
  );
}

export default App;