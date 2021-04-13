import { useMemo } from "react";
import { Redirect, useParams } from "react-router"
import { getHeroById } from "../../selectors/getHeroById";

const heroImages = require.context('../../assets/heroes' , true);

export const HeroScreen = ({ history}) => {

    const handleReturn = () =>{
        history.goBack();
    }

    const { heroeId } = useParams();
    
    // const heroe = getHeroById( heroeId );

    const heroe = useMemo(() => getHeroById( heroeId ), [ heroeId])
    
    if ( !heroe ){
        return <Redirect to = '/' />
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    return (

        <div className = 'row mt-4'>
            <div className = 'col-4'>
                <img
                    // src = {`../assets/heroes/${ heroeId }.jpg`}
                    src = { heroImages(`./${ heroeId }.jpg`).default }
                    alt = { superhero }
                    className = 'img-fluid img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className = 'col-8'> 
                <h3> {superhero} </h3>
                <ul className = 'list-group list-group-flush'>
                    <li className = 'list-group-item' > <b>Alter ego: </b> { alter_ego } </li>
                    <li className = 'list-group-item' > <b>Editorial:  </b> { publisher } </li>
                    <li className = 'list-group-item' > <b>Primera Aparcion: </b> { first_appearance } </li>
                </ul>

                <div className = 'm-3'>
                    <h5 className = ''> Portadores del manto  </h5>
                    <p> { characters } </p>
                    
                    <button
                        className = 'btn btn-dark'
                        onClick = { handleReturn }
                    >
                        Regresar
                    </button>
                </div>

            </div>

        </div>
    )
}

