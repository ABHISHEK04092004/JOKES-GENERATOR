import {useState} from "react";

function Form(){
  let [fullName,setFullName]=useState("abhishek");

  let handleNameChange=(event)=>{
    console.log(event.target.value);
    setFullName(event.target.value);

};

return(
  <form>
    <input
    placeholder="Enter Fullname"
    type="text"
    value={fullName}
    onChange={handleNameChange}
    />
    <button>Submit</button>
  </form>
)
}

export default Form;