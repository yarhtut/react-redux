import React from 'react';
import { Router , Route, Link, hasHistory } from 'react-router';


const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
const About = (props) => <div><h1>About</h1>{props.children}</div>;
const Contact = () => <div><h1>Contact</h1></div>;

const Links = () =>
    <nav>
        <Link activeStyle={{color: 'green' }} to="/">Home</Link>
        <Link activeStyle={{color: 'green' }} to="/about">About</Link>
        <Link activeClassName="active" to="/about/contact">Contact</Link>
    </nav>

class App extends React.Component {
    render() {
        return (
            <Router history = { hasHistory }>
                <Route path="/" component={Home}>
                    <Route path="about" component={About}>
                        <Route path="contact" component={Contact}></Route>
                    </Route>
                </Route>
            </Router>
        );
    }
}

export default App;