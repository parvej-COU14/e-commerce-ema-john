import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const [loggedInUser,setLoggedInuser]=useContext(UserContext)

  console.log(watch("example")); 

  return (
    <form className="ship-form mx-auto my-4" onSubmit={handleSubmit(onSubmit)}>
       <input placeholder="Enter your name" defaultValue={loggedInUser.name} {...register("name", { required: true })} />
       {errors.name && <span className="error">Name is required</span>}
       
       <input placeholder="Enter your email" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
       {errors.email && <span className="error">E-mail is required</span>}
       
       <input placeholder="Enter your Address" {...register("address", { required: true })} />
       {errors.address && <span className="error">Address is required</span>}
       
       <input placeholder="Enter your phone number" {...register("phone", { required: true })} />
       {errors.phone && <span className="error">phone is required</span>}
   
    
      
      <input type="submit" />
    </form>
  
    );
};

export default Shipment;