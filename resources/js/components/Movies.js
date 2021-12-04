import ReactDOM from 'react-dom';
import './app.css';
import { useState } from 'react';
import Showing from './Showing';

function Movies () {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <h1 className="moviestatus">Now Showing</h1>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <h1 className="moviestatus">Coming Soon</h1>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Showing/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Showing/>
        </div>
      </div>
    </div>
  );
}

export default Movies;

if (document.getElementById('movies')) {
    ReactDOM.render(<Movies />, document.getElementById('movies'));
}
