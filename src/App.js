import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <div className="App">
      <div>
        <Header name="Movie-Info"/>
        
        <body className="Background">
          <MovieInfo />
        </body>
        <Footer name="Ifrah Sajjad"/>
      </div>
    </div>
  );
}

export default App;
