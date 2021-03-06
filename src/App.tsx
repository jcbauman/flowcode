import React, {useEffect, useState} from 'react';
import {Switch} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Page} from "./types/interfaces";
import {FlowPageExpanded, FlowPageExplorer} from "./components";


const App: React.FC = () => {

    const [trendingPages,setTrendingPages] = useState<Array<Page>>([]);
    const [pageSlugs, setPageSlugs] = useState<Array<string>>([]);
    const GET_PAGES_ENDPOINT =  'https://dtxsharedprodcdn2.blob.core.windows.net/random/flowpages-mock-data.json';

    //get data from pages endpoint
    useEffect(  () => {
        fetch(GET_PAGES_ENDPOINT)
            .then(response => response.json())
            .then(response => setTrendingPages((response || {pages:[]}).pages))
            .catch(error => console.log(error));
    },[]);

    //process array of available slugs for Router
    useEffect( () => {
        let slugs = trendingPages.map((page:Page) => {
            return process.env.PUBLIC_URL + '/' + page.pages[0].slugName;
        });
        setPageSlugs(slugs);
        console.log(trendingPages);
    },[trendingPages]);


    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path={process.env.PUBLIC_URL + '/'} exact render={() => (<FlowPageExplorer trendingPages={trendingPages}/>) }/>} />
                        <Route path={pageSlugs} render={() => <FlowPageExpanded slug={window.location.pathname} trendingPages={trendingPages}/> } />
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
