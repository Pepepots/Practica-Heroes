import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroeCard } from "./HeroeCard";

export const HeroList = ({ publisher }) => {
    
    // const heroes = getHeroesByPublisher( publisher );

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher])
    
    return (
        <div className = 'row row-cols-1 row-cols-md-3 animate__animated animate__fadeIn'>
            {
                heroes.map( hero => (
                    <HeroeCard
                        key = {hero.id}
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
