import { useParams } from 'react-router';
import { Card } from '../component/Card';
import { Link } from 'react-router-dom';
import { data } from '../db/db';

const Countries = () => {
    const { continentId } = useParams();

    const clickedContinent = data.continents.find((continent=>+continent.id === +continentId));


  return (
    <div>
      <h3 style={{color: "#646bff"}}> Countries In {clickedContinent.name}</h3>
      <div className='continents-container'>
        {clickedContinent.countries.map((country, index)=> <Link to={`/${continentId}/${country.id}`} key={index}><Card data={{id: country.id,name: country.name,image: country.image}}/></Link>)}
      </div>
    </div>
  )
}
export default Countries;
