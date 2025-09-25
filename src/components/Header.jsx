import React from 'react';
import style from'../modules/Header.module.css';


const Header = () => {
  return (
    <header className={style.Header}> 
       <div className='container-fluid'>
        <div className="row">
            <div className="col-12">
                <img className= {`${style.logo}`} src="./img/boolfilms.gpj.png" alt="" />

            </div>
        </div>
    </div>
    </header>
   
  );
}

export default Header;
