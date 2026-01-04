import { useState } from "react";
 import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   
   }
  return errors;
 };


function CommentsForm({addNewComment}){
  // let[formData,SetFormData]=useState({
  //   username:"",
  //   remarks:"",
  //   rating:5,
  // });

     const formik = useFormik({
     initialValues: {
       username: '',
       remarks:'',
       rating:5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

  // from scrath se agar validation apply kare to
let [isValid,SetIsValid]=useState(true);

// let handleInputChange=(event)=>{
//   SetFormData((currData)=>{
//     return{...currData,[event.target.name]:event.target.value};
//   });
// };

// let handleSubmit=(event)=>{
//  // from scrath se agar validation apply kare to
//   if (!formData.username){
//     console.log("username is null");
//     SetIsValid(false);
//     event.preventDefault();
//     return;
//   }
//   console.log(formData);
//   addNewComment(formData);
//   event.preventDefault();
//   SetFormData({
//      username:"",
//     remarks:"",
//     rating:5,

//   });
// }

return(
  <div>
    <h4>Give a comment!</h4>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input placeholder="username"
      type="text"
      value={formik.values.username}
      onChange={formik.handleChange}
      id="username"
      name="username"
      />
      {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
      {/* // */}
{/* {!isValid && <p style={{color:"red"}}>Username cannot be empty</p>} */}
      <br></br>

       <label htmlFor="remarks">Remarks</label>
      <input placeholder="remarks"
      type="text"
      value={formik.values.remarks}
       onChange={formik.handleChange}
      id="remarks"
      name="remarks"
      />

<br></br>

 <label htmlFor="rating">Rating</label>
      <input placeholder="rating"
      type="number"
      value={formik.values.rating}
       onChange={formik.handleChange}
      id="rating"
      max={5}
      min={1}
      name="rating"
      />
<br></br>

<button type="submit">Add Comment</button>
    </form>
  </div>
)
}
export default CommentsForm;