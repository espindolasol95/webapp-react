import React from 'react';
import style from'../modules/Header.module.css';


const Header = () => {
  return (
    <header className={style.header}> 
       <div className='container-fluid'>
        <div className="row">
            <div className="col-12">
                <h1>Prime Film</h1>

            </div>
        </div>
    </div>
    </header>
   
  );
}

export default Header;
