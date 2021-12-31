import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.jpg';
import Button from './Button';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
  }

  .hero__info {
    position: relative;
    margin-top: -12rem;
    aling-items: center;
  }

  .info {
    margin-top: -15rem;
    background: none;
    border-radius: 15px;
    max-width: 600px;
    margin-left: 27rem;
  }

  .para {
    font-size: 1.5rem;
  }


  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }

    .info {
      margin-top: 1rem;
      background: none;
      border-radius: 15px;
      margin-left: 1rem;
    }

    .para {
      font-size: 1.2rem;
    }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, this is</span>
            <span className="hero__name">Enoch Mena</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <div className="info">
              <PText>
                I am 26 a years old young man and looking for an opportunity
                developer to expand my knowledge and polish my skills design.
              </PText>
            </div>
            <Button btnLink="/projects" btnText="See my works" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
