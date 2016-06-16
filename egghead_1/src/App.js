import React from 'react';
import { Router , Route, Link, IndexRoute, browserHistory } from 'react-router';


const Home = () => <h1> Home</h1>
const HomeBody = () => <div>This is the home body</div>
const Other = () => <h1> Other</h1>
const OtherBody = () => <div>This is the other body</div>

const Links= () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
    </nav>

const Container = (props) =>
    <div> {props.header}{props.body}<Links /></div>

class App extends React.Component {
    render() {
        return (
            <Router history = { browserHistory }>
                <Route path="/" component={Container}>
                    <IndexRoute components={{ header: Home, body: HomeBody}}></IndexRoute>
                    <Route path="/other" components={{ header: Other, body: OtherBody}}></Route>
                </Route>
            </Router>
        );
    }
}

export default App;
