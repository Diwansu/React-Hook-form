import './App.css'
import {useForm} from 'react-hook-form'
import {useState} from 'react' 
 
 
 function App () {
  const{register , handleSubmit, formState: {errors} } = useForm()  
  const[submit , setSubmit] = useState (false) 

  const doneSubmit =  (data) =>{
    console.log(data) ;
    setSubmit(true);
  }

   return (
     <section>
       <form onSubmit={handleSubmit(doneSubmit)}>
         {submit ? (
           <div className="success-message"> Registration Successful! </div>
         ) : null}

         <h3>First Name</h3>

         <input
           type="text"
           placeholder="First Name"
           {...register("firstName", { required: "Enter firstName" })}
         ></input>
         <div className="errorMessage">{errors.firstName?.message}</div>

         <h3>Last Name</h3>
         <input
           type="text"
           placeholder="Last Name"
           {...register("lastName", { required: "Enter lastName" })}
         ></input>
         <div className="errorMessage">{errors.lastName?.message}</div>

         <h3>Email Address</h3>
         <input
           type="email"
           placeholder="Email Address"
           {...register("Email", {
             required: "Enter Email",
             pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
           })}
         ></input>
         <div className="errorMessage">{errors.Email?.message}</div>

         <h3>Password</h3>
         <input
           type="password"
           placeholder="Password"
           {...register("Password", {
             required: "Enter Password",
             minLength: {
               value: 4,
               message: "Password must be more than 4 characters",
             },
             maxLength: {
               value: 20,
               message: "Password cannot be more than 20 characters",
             },
           })}
         ></input>

         <div className="errorMessage">{errors.Password?.message}</div>

         <button type="submit">Submit</button>
       </form>
     </section>
   );
 }

 export default App ;