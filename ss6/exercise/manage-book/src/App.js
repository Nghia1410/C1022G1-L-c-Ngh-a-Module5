import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import BookList from "./component/BookList";
import CreateBook from "./component/CreateBook";
import EditBook from "./component/EditBook";

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={BookList}/>
            <Route path="/add" component={CreateBook}/>
            <Route path="/edit/:id" component={EditBook}/>
        </BrowserRouter>
    );
};

export default App;

