/* eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "블로그";
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [좋아요, like] = useState([0, 0, 0]);

  let [logo, setLogo] = useState("블로그임일까요");
  let [modal, setModal] = useState(false);
  let [title] = useState(0);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy = copy.sort();
          글제목변경(copy);
        }}
      >
        가나다정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      

     

      {글제목.map(function (a, a함수) {
        return (
          <div className="list" key={a함수}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {글제목[a함수]}
              <span
                onClick={() => {
                  let copy = [...좋아요];
                  copy[a함수] = copy[a함수] + 1;
                  like(copy);
                }}
              >
                👍
              </span>
              {좋아요[a함수]}
            </h4>

            <p>2월 17일 발행</p>
          </div>
        );
      })}

      
      
      
      {modal == true ? <Modal color="yellow" 글제목={글제목} 글제목변경={글제목변경} /> : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal" style={{backgroundColor: props.color}}>
      <h4 >{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{글제목변경()}}>글수정</button>
    </div>
     );
    }


export default App;
