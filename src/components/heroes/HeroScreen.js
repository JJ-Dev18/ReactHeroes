import React ,{useMemo} from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
const heroImages = require.context("../../assets/heroes", true);
export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    console.log(heroeId)
    const hero = useMemo(() => getHeroById(heroeId), [heroeId])
   
    console.log(hero)
   
    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/')
        }
        else
        history.goBack()
    }
    if( !hero){

        return <Redirect to="/"/>
    }
    const {
        superhero,
        publisher ,
        alter_ego,
        first_appearance,
        characters,
    } = hero 
    return (
      <div className="row mt-5">
        <div className="col-4">
          <img
            //  src={`../assets/heroes/${heroeId}.jpg`}
            src={heroImages(`./${heroeId}.jpg`)}
            className="img-thumbnail animate__animated animate__fadeInLeft"
            alt={superhero}
          />
        </div>
        <div className="col-8">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <b> Alter ego:</b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              {" "}
              <b> Publisher:</b>
              {publisher}
            </li>
            <li className="list-group-item">
              {" "}
              <b> First Appearance</b>
              {first_appearance}
            </li>
          </ul>

          <h5>characters</h5>
          <p>{characters}</p>

          <button className="btn btn-outline-danger" onClick={handleReturn}>
            {" "}
            Return
          </button>
        </div>
      </div>
    );
}
