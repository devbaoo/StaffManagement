import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
