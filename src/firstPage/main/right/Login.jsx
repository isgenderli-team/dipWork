import React from 'react';
import l from './Login.module.css';

const Login=()=>{
  return(
    <section>
      <div className={l.loginDiv}>
        <form action="">
          <input placeholder="email" type="text"/>
          <input placeholder="password" type="password"/>
          <button>Enter</button>
        </form>
      </div>
    </section>
  );
}
export default Login;
