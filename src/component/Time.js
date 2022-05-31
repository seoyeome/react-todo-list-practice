import TimeCSS from './Time.module.css';
import { useState, useEffect } from 'react';

export default function Time(props) {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return (() => clearInterval(id))
  }, []);

  return (
      <div className={TimeCSS.container}>
        <span>{ new Date().toLocaleTimeString() }</span>
      </div>
  );
    
  
  
}