import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import BlogForm from './components/BlogForm';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import Signin from './pages/SignIn';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Hero />
            <Main />
            <Home />
          </Route>
          <Route path="/add-blog" component={BlogForm} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
