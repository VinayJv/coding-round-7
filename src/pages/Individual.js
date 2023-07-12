import React from 'react';
import { useParams } from 'react-router';
import { data } from '../db/db';

const Individual = () => {
    const { continentId, countryId, destinationId } = useParams();

    const clickedDestination = data.continents[continentId-1].countries[countryId-1].destinations[destinationId-1];
    
  


  return (
    <div className='continents-container'>
         <div style={{display: "flex", marginTop: "2rem", flexWrap: "wrap", justifyContent: "center"}}>
            <img className='image-indi' src={clickedDestination.image} alt=""></img>
            <div className='container-indi'>
              <h2>{clickedDestination.name}</h2>
              <p><span>Description:</span> {clickedDestination.description}</p>
              <p><span>Rating:</span> {clickedDestination.ratings}</p>
              <p><span>Reviews:</span> {clickedDestination.reviews}</p>
              <p><span>Location:</span> {clickedDestination.location}</p>
              <p><span>Opening Hours:</span> {clickedDestination.openingHours}</p>
              <p><span>Ticket Price:</span> {clickedDestination.ticketPrice}</p>
              <a href={clickedDestination.website}><span>Website:</span> {clickedDestination.website}</a>
            </div>
         </div>
    </div>
  );
}
export default Individual;