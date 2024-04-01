import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const formName = "contact-form";

  return (
    <>
      <form
        className="d-flex flex-column contactform"
        onSubmit={handleSubmit(onSubmit)}
        name={formName}
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value={formName} />
        <div className="formWrapper px-5">
          <div>
            <input
              className="inputBlock mt-5 px-4 py-2"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div>
            <input
              className="inputBlock mt-3 px-4 py-2"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <input
              className="inputBlock mt-4 px-4 py-2"
              placeholder="Subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span>This field is required</span>}
          </div>
          <div>
            <textarea
              className="inputBlock mt-3 px-4 pt-3 pb-5"
              placeholder="Message"
              {...register("message", { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            className="buttonSubmit mt-4 px-4 py-2 text-center "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
