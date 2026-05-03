import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'



function App() {
  

  const [jokes, setJokes] = useState([]);
  useEffect(() => {
      async function getJoke() {
        let res  = await fetch("https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1", {method: "GET"});
        res = await res.json();
        const jokes = res.data.data;
        setJokes(jokes);
        console.log(jokes);
        
      }

      getJoke();
  }, []);
  return (
    <>
      {
        jokes.map((joke) => (
           (
            <div className="joke-card" key={joke.id}>
              <p className="joke-content">{joke.content}</p>
              <p className="joke-category">Category: {joke.categories[0] ?? "Funny"}</p>
            </div>
          )
        ))
      }
    </>
  )
}

export default App
