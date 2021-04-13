import { Redirect, Route } from "react-router"

export const PublicRoute = ({
    isAuthentificated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest}
            component = { (props) => (
                ( !isAuthentificated)
                    ? <Component { ...props}/>
                    : (<Redirect to = '/'/>)
            )}

        />
    )
}
