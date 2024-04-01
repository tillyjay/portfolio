import React from 'react';
import { useForm } from "react-hook-form";


const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const formName = "contact-form";


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} name={formName} method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value={formName} />
        <div>
        <label>Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Subject</label>
        <input {...register('subject', { required: true })} />
        {errors.subject && <span>This field is required</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea {...register('message', { required: true })} />
        {errors.message && <span>This field is required</span>}
      </div>
      <button type="submit">Submit</button>

        </form>      
        </>
    );
}


export default ContactForm;

