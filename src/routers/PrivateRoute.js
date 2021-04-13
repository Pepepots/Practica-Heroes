import { Redirect, Route } from "react-router"

export const PrivateRoute = ({
    isAuthentificated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest}
            component = { (props) => (
                ( isAuthentificated)
                    ? <Component { ...props}/>
                    : (<Redirect to = '/login'/>)
            )}

        />
    )
}
