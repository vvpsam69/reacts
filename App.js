//UseState.js
import { useState } from "react";
function Name(){
  const [name,setName] = useState("VVP_CS_FSD");
  const changeName= () => {
    setName("Full Stack Development");
  };

  return(
      <div>
        <p>My Name is {name}</p>
        <button onClick={changeName}>Click Me</button>
      </div>
  );
}

export default Name;
