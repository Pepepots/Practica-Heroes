import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = ({history}) => {
    
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({ search: q });
    const { search } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ),[q] )
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push( `?q=${search}` )
    }
    
    return (
        <div>
            <h1>
                Buscador 
            </h1>
            <hr/>

            <div className = 'row'>
                
                <div className = 'col-5'>
                    <h4> Buscar </h4>
                    <hr/>

                    <form className = 'd-grid gap-1' onSubmit = {handleSearch} >
                        
                        <input
                            type = 'text'
                            placeholder = 'Buscar'
                            className = 'form-control'
                            name = 'search'
                            autoComplete = 'off'
                            value = { search }
                            onChange = { handleInputChange }
                        />

                        <button 
                            type = 'submit'
                            className = 'btn btn-dark m-1 btn-block'
                        >
                            Buscar
                        </button>
                    
                    </form>
                </div>
           
                <div className = 'col-7'>
                    
                    <h4> Resultados </h4>
                    <hr/>

                    {
                        ( q === '')
                            &&
                            <div className = 'alert alert-info'>
                                Busca un heroe
                            </div>

                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0 )
                            &&
                            <div className = 'alert alert-danger'>
                                El heroe {q} no encontrado
                            </div>
                    }       
                    
                    {
                        heroesFiltered.map( heroe => (
                            <HeroeCard 
                                key = { heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                
                </div>
            
            </div>
            
        </div>
    )
}
