import React from 'react';

function Header() {
  return (
    <div className="App">
        <nav>
          <div className='MenuGauche'>
            <a href='#' id='titre'><b>Senja</b></a>
            <a href='#'>Pricing</a>
            <a href='#'>Blog</a>
            <a href='#'>Widgets</a>
            <a href='#'>Feedback</a>
          </div>
          <div className='MenuDroit'>
            <a href='#'>Sign In</a>
            <button>Sign up for free</button>
          </div>
        </nav>
      </div>
  );
}

export default Header;