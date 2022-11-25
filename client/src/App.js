import './App.css';
import React, { useState } from 'react';

function App() {
  const [language, getLanguage] = useState("");
  const [data, getData] = useState("");
  const handleSelect = (e) => {
    // console.log(e.target.value);
    getLanguage(e.target.value);
  }

  const handleClick = async () => {
    if (language === "") {
      alert("Please select a language");
      window.location.reload();
    }
    const url = `http://localhost:5000/hello?language=${language}`;
    try {
      const fetchedResults = await fetch(url,
        {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        }).then(response => response.json())
        // .then(response => console.log(response))
        .then(res => getData(res.data));
    }
    catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1 className="title">Hello World in different Languages</h1>
      <div className="App">
        <select className="dropdown" id="dropdown" onChange={handleSelect}>
          <option value="N/A">Select</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="French">French</option>
        </select>
        <button className="button" onClick={handleClick}>Get response</button>
      </div>
      <h1 className="HelloWorld"> {data}</h1>
    </>
  );
}

export default App;
