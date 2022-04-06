import { useEffect, useState } from 'react';
import { fetchAdvice } from '../../utils/api';
import Advice from '../Advice/Advice';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState({});

  const onClickHandler = () => {
    fetchAdvice()
      .then((res) => setAdvice(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAdvice()
      .then((res) => setAdvice(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='page'>
      <Advice onClick={onClickHandler} advice={advice} />
    </div>
  );
};

export default App;
