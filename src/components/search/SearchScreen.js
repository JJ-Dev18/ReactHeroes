import React ,{useMemo}from 'react'
import { heroes } from '../../data/heroes'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../customHooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({history}) => {
 
    const location = useLocation()
    const {q = ''} = useMemo(() => queryString.parse(location.search), [location.search]) 
    const [ values, handleInputChange] = useForm({searchText : q})
    const {searchText} = values;
    const herosFiltered = useMemo(() => getHeroByName(q), [q]);
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${ searchText}`)
        
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                        onChange={handleInputChange}
                        type="text"
                        name="searchText"
                        value={searchText}
                        placeholder="Find your hero"
                        autoComplete="off"
                        className="form-control"></input>
                        <button className="btn m-1 btn-block btn-outline-primary">Search...</button>
                    </form>
                </div>
                <div className="col-7">
                  
                   <h4>Results</h4>
                   <hr/>
                   {
                       (q === '') &&
                    <div className="alert alert-info">
                         Search a hero 
                    </div>
                   } 
                    {
                       (q !== '' && herosFiltered.length === 0) &&
                    <div className="alert alert-danger">
                         There is no a hero with { q }
                    </div>
                   } 
                   {
                       herosFiltered.map( hero => (
                           <HeroCard key={hero.id} hero={hero} />
                       ))
                   }
                </div>
            </div>
        </div>
    )
}
