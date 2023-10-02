"use client";
import { useRef } from "react";
import { object, string } from "yup";

export const ContactSchema = object({
  name: string().required(),
  email: string().email().required(),
  message: string().required(),
});

export default function Contact() {
  const formRef = useRef();

  const contact_handler = async (e) => {
    e.preventDefault();
    const name = formRef.current?.elements.namedItem("name");
    const email = formRef.current?.elements.namedItem("email");
    const message = formRef.current?.elements.namedItem("message");
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const isValid = await ContactSchema.isValid(data);
    if (isValid) {
      fetch(process.env.GETFORM_URL, {
        method: "POST",
        body: new FormData(e.target),
      }).then(async (res) => {
        if (res.status === 200) {
          formRef.current?.reset();
        } else {
          const data = await res.json();
        }
      });
      formRef.current?.reset();
    } else {
    }
  };
  return (
    <section className="min-h-screen flex items-center pb-28" id="contact">
      <div className="w-full">
        <h2 className="text-3xl md:text-5xl text-teal-600 font-medium">
          Contact me
        </h2>
        <form
          className="flex flex-col gap-4 mt-4"
          ref={formRef}
          onSubmit={contact_handler}
        >
          <div className="flex flex-col">
            <label className="text-sm md:text-md pt-2" htmlFor="name">
              Name:
            </label>
            <input
              className=" placeholder:text-xs placeholder:font-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              type="text"
              name="name"
              required
            ></input>
            <label className="text-sm md:text-md pt-2" htmlFor="email">
              Email:
            </label>
            <input
              className="placeholder:text-xs placeholder:font-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              type="email"
              name="email"
              required
            ></input>
            <label className="text-sm md:text-md pt-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="placeholder:text-xs placeholder:font-light bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 w-full"
              rows={10}
              name="message"
              required
            ></textarea>
            <button
              type="text-sm md:text-md submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Send
            </button>
          </div>
        </form>
        <p className="flex justify-end text-sm md:text-md md:text-base py-5 leading-5 md:leading-8 text-gray-800 md:text-justify">
          Alternatively, you can reach me at : {"brnhricardo@gmail.com"}
        </p>
      </div>
    </section>
  );
}
