import {useState, useEffect} from 'react';
import MonnifySDK from './MonnifySDK';

const MonInt = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  return (
    <div>
        <form action="">
            <label htmlFor=""></label>
            <input type="text" name="customerName" id="customerName" />

            <label htmlFor=""></label>
            <input type="email" name="" id="" />

            <label htmlFor=""></label>
            <input type="tel" name="" id="" />

            <button type="button">Pay With Monnify</button>
        </form>
    </div>
  )
}

export default MonInt