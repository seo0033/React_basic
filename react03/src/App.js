import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  // var : 중복 선언 가능
  // const : 중복 선언 불가능, 변수 재선언, 변수 재할당 모두 불가능
  // let : 중복 선언 불가능, 변수에 재할당이 가능
  // usestate : 변수 in react(안하면 데이터 변경시 리렌더링이 안됨)
  const [hc, setHc] = useState(false);
  return (

    <div>
      <i className='xi-heart'
        onClick={() => (setNum(num + 1), setHc(!hc))}
        style={{ color: hc && 'red' }}></i> {num}
    </div >

  );//return end

}

export default App;
