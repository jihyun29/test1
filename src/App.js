
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';;

function App() {
  const [todos,setTodos] =useState([
    {id:1, content: "react를 배워봅시다."}
  ]);

  const[content, setContent] =useState('')

//내용핸들러
  const contentChangeHandler = (event)=>{
    setContent(event.target.value);
  }

//추가하기버튼
  const clickAddButton = ()=>{
    const newTodoitem={
      id: uuidv4(),
      content: content,
    }
    if(content === '')
    alert('입력하세요')

   else 
  setTodos([...todos, newTodoitem]);
    }

  return (
    <div className='layout'>
      <div>
        <input type='text' onChange={contentChangeHandler} value={content}></input>
        <button onClick={clickAddButton}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className='squareBox'>
        {todos.map(function (item) {
            return (
              <div key={item.id} className='squareStyle'>
              {item.content}
              </div>
              )
            }
          )
        }
      </div>
    </div>
 
  )
}
export default App;
