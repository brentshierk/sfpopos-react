import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../POPOSList/sfpopos-data.json';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params;
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title}></img>
      </div>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>{hours}</p>
        <p>{features}</p>
        <p>
          {geo.lat} {geo.lon}
        </p>
      </div>
    </div>
  );
}

export default POPOSDetails;