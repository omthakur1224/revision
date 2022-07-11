import React from 'react'
import { useForm } from 'react-hook-form'
import './Form.css'
function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);  return (

      <form onSubmit={handleSubmit(onSubmit)} className="main-form">
      <input {...register("firstName",{required:true})} />
      {errors.firstName && <span>this field is required</span>}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" className='btn'/>
    </form>
  )
}

export default Form