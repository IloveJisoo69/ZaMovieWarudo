import ReactDOM from 'react-dom';
import Header from './Header';
import Movies from './Movies';

function Home() {
  return (
    <div>
      <Header/>
      <Movies/>
    </div>
  );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
