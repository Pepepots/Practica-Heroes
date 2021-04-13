import { useContext } from "react"
import { AuthContext } from "../../auth/authContext"
import { useForm } from "../../hooks/useForm"
import { types } from "../../types/types"

export const LoginScreen = ({ history}) => {
    
    const { dispatch } = useContext(AuthContext)
    
    const [ formValues, handleInputChange ] = useForm({name: ''});
    const { name } = formValues;
     
    const handleLogin = (e) => {
        
        e.preventDefault();

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        const action = {
            type: types.login,
            payload:{
                name: `${name}`
            }
        };
        
        dispatch(action);
        
        history.replace(lastPath);
    }
    
    return (
        <div className = 'container mt-5 text-center'>
            <h1> Registrarse </h1>
            <hr />

            <div className = 'row'>
                <form className = 'd-grid gap-1 col-6 m-auto' onSubmit = {handleLogin} >
                        
                    <input
                        type = 'text'
                        placeholder = 'Nombre'
                        className = 'form-control'
                        name = 'name'
                        autoComplete = 'off'
                        value = { name }
                        onChange = { handleInputChange }
                    />
    
                    <button 
                        type = 'submit'
                        className = 'btn btn-dark m-1 btn-block'
                    >
                        Entrar
                    </button>
                
                </form>
            </div>

        </div>
    )
}
