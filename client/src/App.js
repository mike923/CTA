import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home, About } from './Components'
import { 
    AuthContainer, 
    PrivateRoute, 
    NavbarContainer, 
    AddShowContainer, 
    AllShowsContainer, 
    ProfileContainer, 
    UsersContainer, 
    UserShowContainer 
} from './Containers';

const App = () => {

    return (
        <div className="App">
            <NavbarContainer />
            <Switch>
                <Route 
                    path="/login" 
                    component={AuthContainer} 
                />
                <Route 
                    path="/signup" 
                    component={AuthContainer} 
                />
                <Route 
                    path="/about" 
                    component={About} 
                />
                <PrivateRoute 
                    path="/shows/:id" 
                    component={UserShowContainer} 
                />
                <Route 
                    path="/shows" 
                    component={AllShowsContainer} 
                />
                <PrivateRoute 
                    path="/users/:id/addShow" 
                    component={AddShowContainer} 
                />
                <PrivateRoute 
                    path="/users/:id" 
                    component={ProfileContainer} 
                />
                <PrivateRoute 
                    path="/users" 
                    component={UsersContainer} 
                />
                <PrivateRoute 
                    path="/profile" 
                    component={ProfileContainer} 
                />
                <Route 
                    path="/" 
                    component={Home} 
                />
            </Switch>
        </div>
    );
}

export default App;
