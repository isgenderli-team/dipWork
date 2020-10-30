import React from 'react';
import r from './Registration.module.css';

const Registration=()=>{
  return (
    <section>
      <div  className={r.regDiv}>
        <form action="">
          <div>
            <div>
              <h1>Впервые в Isgenderli?</h1>
              <small>Моментальная регистрация</small>
            </div>
              <div>
              <input placeholder="name" type="text"/>
            </div>
            <div>
              <input placeholder="lastname" type="text"/>
            </div>
            <div>
              <input placeholder="email" type="text"/>
            </div>
            <div>
              <input placeholder="password" type="text"/>
            </div>
            <div className={r.selCont}>

                <select name="" id="">
                  <option>Russia</option>
                </select>
                <select name="" id="">
                  <option>Moskow</option>
                </select>
            </div>
            <div>
              <button>Submit</button>
              <button>Continue throw FB</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Registration;
