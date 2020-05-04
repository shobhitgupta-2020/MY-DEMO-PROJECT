import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div>
                    <h1>User Information</h1>
                   <Switch>
                       <Route path="/" exact component={ListUserComponent} />
                       <Route path = "/users" component={ListUserComponent} />
                       <Route path = "/edit-user" component={ListUserComponent}  />
                       <Route path = "/add-user" component={ListUserComponent}  />
                   </Switch>
                </div>
            </Router>
        </div>
    );
};
