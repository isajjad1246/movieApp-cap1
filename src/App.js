import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <div className="App">
      <div>
        <Header name="Movie-Info"/>
        <MovieInfo />
        <Footer name="2021"/>
      </div>
    </div>
  );
}

export default App;
