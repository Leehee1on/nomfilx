import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom';
import Home from "Routes/Home/";
import TV from "Routes/TV";
import Detail from "Routes/Detail";
import Header from 'Components/Header';
import Search from "Routes/Search";

// path는 어느 URL에서 해당 Route를 render할지 알려줌
// Redirect = 없는 페이지면 받아서 /로 돌려줌
// Link는 Router 안에다 서야함
export default () => (
    <Router>
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tv" exact component={TV}/>
            <Route path="/search"  component={Search}/>
            <Route path="/movie/:id"  component={Detail}/>
            <Route path="/show/:id"  component={Detail}/>
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);
