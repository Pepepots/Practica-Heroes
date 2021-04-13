import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRouter";


export const AppRouter = () => {
    
    const {user} = useContext(AuthContext)
    
    return (
        <Router>
            <div>
                
                
                <Switch>
                    <PublicRoute 
                        exact 
                        path = '/login' 
                        component = { LoginScreen }
                        isAuthentificated = { user.logged} 
                    />
                    
                    <PrivateRoute 
                        path = '/' 
                        component = { DashboardRoutes } 
                        isAuthentificated = { user.logged}
                    />
                </Switch>
            
            </div>
        </Router>
    )
}
