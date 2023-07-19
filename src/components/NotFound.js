import React from 'react';
import '../NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <header>
        <div className="head-text">
          <p>404 Not Found</p>
        </div>
      </header>

      <main>
        <div className="main-wrapper">
          <picture className="scarecrow-img">
            <img src="https://raw.githubusercontent.com/nat-oku/devchallenges/main/Scarecrow.png" alt="scarecrow" />
          </picture>
          <div className="error-text">
            <h2>I have bad news for you</h2>
            <p>The page you are looking for might be removed or is temporarily unavailable.</p>
            {/* <span className="input-group-btn">
              <button  type="button">Back to homepage</button>
            </span> */}
          </div>
        </div>
      </main>

      {/* <footer>
        <p><i className="far fa-copyright"></i> Arif</p>
      </footer> */}
    </div>
  );
};

export default NotFound;
