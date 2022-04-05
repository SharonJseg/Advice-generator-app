import './App.css';
import divider from '../../images/pattern-divider-desktop.svg';
import mobileDivider from '../../images/pattern-divider-mobile.svg';
import dice from '../../images/icon-dice.svg';

const App = () => {
  return (
    <div className='page'>
      <article className='advice__container'>
        <h2 className='advice__number'>advice #117</h2>
        <p className='advice__text'>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <div>
          <img className='advice__divider' src={divider} alt='' />
          <img className='advice__mobile-divider' src={mobileDivider} alt='' />
        </div>
        <button className='advice__button'>
          <img className='dice' src={dice} alt='' />
        </button>
      </article>
    </div>
  );
};

export default App;
