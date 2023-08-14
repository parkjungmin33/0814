import React from 'react';
import './FirstPage.css';

function FirstPage() {
    return (
      <div className="f">
        <div className='button-container'>
          <img src="image/logo.png" alt="로고" className="icon"/>
          <button className='login'>로그인</button>
          <button className='signup'>회원가입</button>
        </div>
      </div>
    );
  }
  
  export default FirstPage;