import React , {useState} from 'react';
import '../Styles/Rigester.css';
import { Link } from 'react-router-dom';

export default function Rigester() {

  const regex = /09(0[1235]|1[0-9]|3[0-9]|9[024])[0-9]{7}/;
  const [value, setValue] = useState("");
  let test = regex.test(value);

  return (
    <div className='rigester'>
      <form>
        <input type="text" placeholder="Username : " />
        <input type="password" placeholder="Password : " />
        <input type="email" placeholder="Email : " />
        <input type="phone" placeholder="Phone : " value={value} onChange={(e) => setValue(e.target.value)} />
        <p className={test === false ? 'regex' : 'regex--off'}>Please Enter The Correct Phone Number !!</p>
        <Link to={"/home"}>Rigester</Link>
        <p>
          Already an account ? <Link to={"/"}>Loggin Now</Link>
        </p>
      </form>
    </div>
  );
}
