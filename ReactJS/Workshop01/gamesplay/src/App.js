import { Route, Switch, Redirect } from 'react-router-dom';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import Details from "./components/Details";
import Catalogue from "./components/GameCatalog/Catalogue";


function App() {
    return (
        <div id="box">

            <Header />

            <main id="main-content">
                <Switch>
                    <Route path="/" exact component={WelcomeWorld} />
                    <Route path="/games" exact component={Catalogue} />
                    <Route path="/create-game" component={CreateGame} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/games/:gameId" component={Details} />
                    <Route path="/custom">
                        <h2>Custom page</h2>
                        <p>Custommm</p>
                    </Route>
                    <Route path="/logout" render={(props) => {
                        console.log('Logged out.');
                        return <Redirect to="/" />
                    }}></Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
