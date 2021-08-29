import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { User } from './pages/User';
import { notFound } from './pages/404';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Navbar />
        <div className='container py-6'>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/users" exact component={Users} />
            <Route path="/user/:id" component={User} />
            <Route component={notFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
