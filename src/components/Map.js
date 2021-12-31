import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here i am</h3>
          <PText>Betania Camino Real Calle 300, Panama</PText>
          <a
            className="map__card__link"
            href="https://www.google.com.pa/maps/place/9%C2%B000'36.4%22N+79%C2%B031'40.6%22W/@9.0095751,-79.53053,15.75z/data=!4m6!3m5!1s0x0:0xef06d7b70632b10c!7e2!8m2!3d9.0101067!4d-79.5279433?hl=es-419"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
