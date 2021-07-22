import React, {useEffect, useState} from 'react';
import './App.css';
import {GET_PAGES_ENDPOINT, getTrendingPages} from "./store/requests";
import {Page} from "./types/interfaces";
import {FlowPageCard} from "./components";


const App: React.FC = () => {

    const [trendingPages,setTrendingPages] = useState<Array<Page>>([]);

    useEffect(  () => {
       fetch(GET_PAGES_ENDPOINT)
      .then(response => response.json())
      .then(response => setTrendingPages((response || {pages:[]}).pages))
      .catch(error => console.log(error));
    },[]);

    useEffect( () => {
        console.log(trendingPages);
    },[trendingPages]);

  return (
    <div className="App">
      <header className="App-header">
          {trendingPages.map((page:Page) =>
              <FlowPageCard page={page}/>
          )}
      </header>
    </div>
  );
}

export default App;
