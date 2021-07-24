import React, {useEffect, useState} from 'react';
import {Switch} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {GET_PAGES_ENDPOINT} from "./store/requests";
import {Page} from "./types/interfaces";
import {FlowPageExpanded, FlowPageExplorer} from "./components";


const App: React.FC = () => {

    const [trendingPages,setTrendingPages] = useState<Array<Page>>([]);
    const [pageSlugs, setPageSlugs] = useState<Array<string>>([]);

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
            return '/' + page.pages[0].slugName;
        });
        setPageSlugs(slugs);
    },[trendingPages]);


    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Switch>
                        <Route path="/" exact render={() => (<FlowPageExplorer trendingPages={trendingPages}/>) }/>} />
                        <Route path={pageSlugs} render={() => <FlowPageExpanded slug={window.location.pathname} trendingPages={trendingPages}/> } />
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
