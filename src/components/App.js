
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(data => setData(data))
  }, [])
  return (
    <div>
      {
        data.map(el => {
          return (
            <>
              <h2>{el.id+". "+el.title}</h2>
              <p>{el.body}</p>
            </>
          )
        })
      }
    </div>
  )
}

export default App
