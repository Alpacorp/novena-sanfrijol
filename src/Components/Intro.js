import * as React from 'react';
import { mainFamily, novenaIntro, sanfrijol } from '../assets';
import BrandLogo from './BrandLogo';
import './Components.css';

const Intro = () => {
  return (
    <>
      <div className='introModal'>
        <div className='introContent'>
          <BrandLogo src={sanfrijol} />
          <div className='familyImage'>
            <img src={mainFamily} alt="novena familiar" />
          </div>
          <div className='novenaImage'>
            <img src={novenaIntro} alt="novena de aguinaldos" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Intro;