import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { slideIn, scale } from "../utils/animation";
import { useRef } from "react";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef);
  return (
    <section
      id="contact"
      className="text-primary-text flex flex-col lg:flex-row justify-center items-center min-h-svh lg:gap-12 py-8"
    >
      <motion.div
        ref={containerRef}
        variants={scale}
        initial="init"
        whileInView="animate"
        custom={0.5}
        className="flex flex-col text-center lg:w-96 items-center justify-center"
      >
        <h2 className="font-bold text-5xl">Let's work together</h2>
        <p className="my-4">halex.panama@gmail.com</p>
        <div className="w-48 h-48 md:w-60 md:h-60">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 4 }}
              d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
      <div className="w-full px-4 md:w-1/2 lg:max-w-lg">
        <motion.form
          action="https://formsubmit.co/halex.panama@gmail.com"
          target="_blank"
          method="POST"
          onSubmit={onSubmit}
          className="flex flex-col w-full"
          variants={slideIn}
          initial="right"
          whileInView="animate"
        >
          <motion.input
            type="text"
            variants={slideIn}
            className="px-4 py-2 bg-transparent border-2 border-primary-text rounded-md w-full my-2"
            placeholder="Your name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red-300">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <motion.input
            type="email"
            variants={slideIn}
            className="px-4 py-2 bg-transparent border-2 border-primary-text rounded-md w-full my-2"
            placeholder="Your email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red-300">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <motion.textarea
            variants={slideIn}
            className="px-4 py-2 bg-transparent border-2 border-primary-text rounded-md min-h-[10rem] w-full my-2"
            placeholder="Your message"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red-300">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <motion.div variants={slideIn}>
            <button className="bg-primary-button font-semibold rounded-md text-primary-bg px-4 py-2 hover:bg-primary-button-700 transition-colors">
              Submit
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
