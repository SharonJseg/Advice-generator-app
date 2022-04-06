import React from 'react';
import './Advice.css';
import divider from '../../images/pattern-divider-desktop.svg';
import mobileDivider from '../../images/pattern-divider-mobile.svg';
import dice from '../../images/icon-dice.svg';

const Advice = ({ onClick, advice }) => {
  return (
    <article className='advice__container'>
      <h2 className='advice__number'>{`advice #${advice.id}`}</h2>
      <p className='advice__text'>{`“${advice.advice}”`}</p>
      <div>
        <img className='advice__divider' src={divider} alt='' />
        <img className='advice__mobile-divider' src={mobileDivider} alt='' />
      </div>
      <button type='button' className='advice__button' onClick={onClick}>
        <img className='dice' src={dice} alt='' />
      </button>
    </article>
  );
};

export default Advice;
