import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfoComponent></MyInfoComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyInfoComponent(){
  const [MyName, setMyName] = useState("")
  const [FavoriteColor, setColor] = useState("")
  const [favoriteMovies, setFavoriteMovies] = useState([])
  return (
    <div className="App">
  
        
        <p> Hi, I'm {MyName}
          <br></br>
        <input type="text" onChange={(event) => {
          const name = event.target.value;
          setMyName(name)
        }}></input>
        </p>
          <br></br>
        <p style={{backgroundColor: FavoriteColor}}>
          My favorite color is {FavoriteColor}<br></br>
        <input type="text" onChange={(event) => {
          const color = event.target.value;
          setColor(color)
        }}></input>
        </p>
       <br></br>
            <div>
            {favoriteMovies.map((movie) => (
        <span
          style={{
            backgroundColor: FavoriteColor,
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px double white",
            margin: "25px",
            padding: "10px 10px 15px 15px",
            borderRadius: "10px",
          }}
        >
          {movie} &nbsp;
        </span>
         ))}
            </div>
            <br></br>

<label>
        Favorite Movie &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setFavoriteMovies([newMovie, favoriteMovies[1], favoriteMovies[2]]);
          }}
        ></input>
      </label>
      &nbsp;
      <label>
        Favorite Movie &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setFavoriteMovies([favoriteMovies[0], newMovie, favoriteMovies[2]]);
          }}
        ></input>
      </label>
      &nbsp;
      <label>
        Favorite movie &nbsp;
        <input
          type="text"
          onChange={(event) => {
            const newMovie = event.target.value;
            setFavoriteMovies([favoriteMovies[0], favoriteMovies[1], newMovie]);
          }}
        ></input>
      </label>
          
       
        

    </div>
  );
}


export default App;