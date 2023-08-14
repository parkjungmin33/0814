import React from 'react';
import './MainPage.css';

function MainPage() {
    return (
      <div className="App">
        <button className='protector'>보호자</button>
        <button className='senior'>노인</button>
        <button className='setting'>설정</button>
      </div>
    );
  }
  
  export default MainPage;