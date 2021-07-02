import React,{useMemo} from 'react'
import { getHeroByPublihser } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({publisher}) => {

   
    
    const heroes = useMemo(() => getHeroByPublihser(publisher), [publisher])
    return (
        <div className="card-columns animate__animated animate__pulse">
            {
                heroes.map( hero => (
                     <HeroCard key={hero.id} hero={hero}>
                         {hero.superhero}
                     </HeroCard>
                ))
            }
        </div>
    )
}
