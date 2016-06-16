import React from 'react';
import { Router , Route, Link, browserHistory } from 'react-router';


const Message = (props) =>
    <div><h1>{props.params.message || 'Hello'}</h1><Links /></div>

const Links = () =>
    <nav>
        <Link to="/"> Hello</Link>
        <Link to="/Hi">Hi</Link>
        <Link to="/Yo">Yo</Link>
    </nav>

class App extends React.Component {
    render() {
        return (
            <Router history = { browserHistory }>
                <Route path="/(:message)" component={Message}></Route>
            </Router>
        );
    }
}

export default App;
