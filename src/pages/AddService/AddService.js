import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:3000/services', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service">
           <h1>add a services</h1> 
           <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register("name")} placeholder="Name"/>
      <input {...register("reviews")} placeholder="reviews"/>
      <textarea {...register("description")}  placeholder="Description"/>
      <textarea {...register("duration")}  placeholder="duration"/>
      <textarea {...register("location")}  placeholder="location"/>
      <input type="number" {...register("purchase")} placeholder="purchase"/>
      <input {...register("img")} placeholder="img url"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;