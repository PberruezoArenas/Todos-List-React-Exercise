import React, { useState } from "react";
import muro from "../../img/muro.jpg";

const Form = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);



    function submitTask(e) {
        if (e.key === "Enter") {
            setList(list.concat(task));
            setTask("");
          }
    }
    

    return (
            
        <div className="mb-3 container todolist" style={{background: `url(${muro})`}}>
            <h1 className="title">todos</h1>
            <input type="text" placeholder="What needs to be done?" className="form-control my-input" onChange={(e) => setTask(e.target.value.slice(0, 35))}value={task} onKeyDown={submitTask} />
        
            <ul>
                {list.map((item, index) => (<li key={index}>{item}<i className="fa fa-trash" aria-hidden="true" onClick={() => setList(list.filter((item, myIndex) => index !== myIndex))}></i></li>))}
            </ul>
        <div className="container items-left">{list.length} items left  </div>

             <div class="line-container">
                <div class="line-one" style={{background: `url(${muro})`}}></div>
                <div class="line-two" style={{background: `url(${muro})`}}></div>
            </div>
        </div>

);
}



export default Form;



































// import React, { useState } from "react";

// const Form = () => {
//     const [task, setTask] = useState("");
//     const [list, setList] = useState([]);

//     function addTask(e) {
//         setTask(e.target.value);
//     }

//     function submitTask(e) {
//         if (e.key === "Enter") {
//             e.preventDefault();
//             setList(list.concat([task]));
//             setTask("");
//           }
//     }
    
//     return (
//         <>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">To Do</label>
//                     <input type="text" className="form-control" onChange={addTask} value={task} onKeyDown={submitTask} />
//                 </div>
//                 <ul>
//                     {list.map((item, index) => (<li key={index}>{item}</li>))}
//                 </ul>
//             </form>
//         </>
//     );
// };

// export default Form;



