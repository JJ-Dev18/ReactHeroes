import React , {useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch,
 
  } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { Marvel } from '../components/Marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { AuthContext } from '../auth/AuthContext';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

   const {user} = useContext(AuthContext)
  
    return (
        <Router>
        <div>
          {/* <Navbar/> */}
          <Switch>
            <PublicRouter exact path="/login" component={LoginScreen} isAuthenticated={user.logged}/>
           
            <PrivateRouter   path="/" component={DashboardRoutes} isAuthenticated={user.logged} />
             
          </Switch>
        </div>
      </Router>
    )
}
