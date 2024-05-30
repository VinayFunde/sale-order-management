import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import Login from './components/Auth/Login';
import Navbar from './components/Navbar';
import ActiveOrders from './components/Orders/ActiveOrders';
import CompletedOrders from './components/Orders/CompletedOrders';
import './styles.css';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
      <Router>
        {!isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <>
            <Navbar />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/active-orders" component={ActiveOrders} />
              <Route path="/completed-orders" component={CompletedOrders} />
              <Redirect from="/" to="/active-orders" />
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
};

const WrappedApp = () => (
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
);

export default WrappedApp;
