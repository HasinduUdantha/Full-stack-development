import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
    <MovieCard movie={{title: "Inception", release_date: "2010"}} />
    <MovieCard movie={{title: "Interstellar", release_date: "2014"}} />
    </>
  )
}

export default App
