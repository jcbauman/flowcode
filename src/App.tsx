import React, {useEffect, useState} from 'react';
import {Switch} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {GET_PAGES_ENDPOINT} from "./store/requests";
import {Page} from "./types/interfaces";
import {FlowPageExpanded, FlowPageExplorer} from "./components";


const App: React.FC = () => {

    const [trendingPages,setTrendingPages] = useState<Array<Page>>([]);
    const [pageSlugs, setPageSlugs] = useState<Array<string>>(["/andrew", "/ta", "/corey", "/sam"]);

    //get data from pages endpoint
    useEffect(  () => {
        fetch(GET_PAGES_ENDPOINT)
            .then(response => response.json())
            .then(response => setTrendingPages((response || {pages:[]}).pages))
            .catch(error => console.log(error));
    },[]);

    useEffect( () => {
        let slugs = trendingPages.map((page:Page) => {
            return '/' + page.pages[0].slugName;
        });
        setPageSlugs(slugs);
    },[trendingPages]);

    const getMatchingPage = () => {
        console.log('matching',window.location.pathname,pageSlugs);
        let filteredPages = trendingPages.filter((page:Page) => {
            console.log(page.pages[0].slugName,window.location.pathname,page.pages[0].slugName === window.location.pathname);
            return page.pages[0].slugName === window.location.pathname});
        console.log('matching',window.location.pathname,pageSlugs,filteredPages);
        if(filteredPages.length > 0){
            return filteredPages[0];
        }
    };


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
