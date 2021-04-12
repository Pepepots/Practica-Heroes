
export const LoginScreen = ({ history }) => {
    
    const handleLogin = () => {

        // history.push('/');
        history.replace('/');

    }
    
    return (
        <div className = 'container mt-5'>
            <h1> Registarse </h1>
            <hr />

            <button
                className = 'btn btn-dark'
                onClick = {handleLogin}
            >
                Entrar
            </button>
        </div>
    )
}
