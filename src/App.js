import './App.css';
import Layout from 'components/UI/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import About from 'components/About';

export default function App() {
    return (
        <Layout>
            <Switch>
                <Route component={About} path="/about" />
                <Route component={Home} path="/" />
            </Switch>
        </Layout>
    );
}
