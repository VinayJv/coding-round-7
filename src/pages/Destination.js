import React from 'react';
import { useParams } from 'react-router';
import { Card } from '../component/Card';
import { Link } from 'react-router-dom';
import { data } from '../db/db';

const Destination = () => {
    const { continentId, countryId } = useParams();

    const clickedCountry = data.continents[continentId-1].countries.find((country)=>+country.id === +countryId);
    console.log(clickedCountry);


  return (
    <div>
      <h3 style={{color: "#646bff"}}>Destinations in {clickedCountry.name}</h3>
      <div className='continents-container'>
        {clickedCountry.destinations.map((destination,index)=><Link to={`/${continentId}/${countryId}/${destination.id}`} key={index}><Card data={{id: destination.id, name: destination.name, image: destination.image}}/></Link>)}
      </div>
    </div>
  );
}
export default Destination;
