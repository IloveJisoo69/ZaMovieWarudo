import ReactDOM from 'react-dom';
import Header from './Header';
import Movies from './Movies';
import Schedule from './Schedule';

function Home() {
  return (
    <div>
      <Header/>
      <Schedule/>
    </div>
  );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
