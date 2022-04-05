import './App.css';
import divider from '../../images/pattern-divider-desktop.svg';
import mobileDivider from '../../images/pattern-divider-mobile.svg';
import dice from '../../images/icon-dice.svg';
import { useEffect, useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState({});

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickHandler = () => {
    fetchAdvice();
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='page'>
      <article className='advice__container'>
        <h2 className='advice__number'>{`advice #${advice.id}`}</h2>
        <p className='advice__text'>{`“${advice.advice}”`}</p>
        <div>
          <img className='advice__divider' src={divider} alt='' />
          <img className='advice__mobile-divider' src={mobileDivider} alt='' />
        </div>
        <button
          type='button'
          className='advice__button'
          onClick={onClickHandler}
        >
          <img className='dice' src={dice} alt='' />
        </button>
      </article>
    </div>
  );
};

export default App;
