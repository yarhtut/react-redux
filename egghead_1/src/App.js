import React from 'react';
import { Router , Route, Link, IndexRoute, Redirect,browserHistory } from 'react-router';

const Home = () => <div><Links /><h1>Home</h1></div>
const About = () => <div><Links /><h1>About</h1></div>
const Contact = () => <div><Links /><h1>Contact</h1></div>

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/redirect">Redirect</Link>
    </nav>

class App extends React.Component {
    render() {
        return (
            <Router histroy = { browserHistory }>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Redirect from="redirect" to="/about"></Redirect>
            </Router>
        )
    }
}
export default App;
