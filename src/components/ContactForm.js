import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert("Thank you for reaching out!");

    
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-primary">Contact Me</h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Feel free to leave me a message. I'll get back to you soon!
      </p>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-300 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-300 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-300 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-700"
        ></textarea>
      </div>

      {submitted && (
        <p className="text-green-500 text-center font-medium">
          Your message has been sent successfully!
        </p>
      )}

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 transition transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
