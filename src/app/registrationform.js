
"use client";

import { useState } from "react";
import { addStudent } from "./action"; //it is a named import

export default function RegistrationForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData) {
    setMessage("");

    // Get values from form
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    // Regex patterns
    const nameRegex = /^[A-Za-z ]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Name validation
    if (!nameRegex.test(name.trim())) {
      setMessage(
        "Name must contain only letters and spaces."
      );
      return;
    }

    // Email validation
    if (!emailRegex.test(email.trim())) {
      setMessage("Enter a valid email address.");
      return;
    }

    // Phone validation
    if (!phoneRegex.test(phone.trim())) {
      setMessage("Phone number must contain exactly 10 digits.");
      return;
    }

    // Call Server Action
    const result = await addStudent(formData);//addStudent function is invoked

    setMessage(result.message);
  }

  return (
    <div>
      <h2>Register Student</h2>

      <form action={handleSubmit}>

        {/* Student Name */}
        <div>
          <label>Student Name:</label>
          <br />

          <input
            type="text"
            name="name"
            placeholder="Enter student name"
            required
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email:</label>
          <br />

          <input
            type="text"
            name="email"
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        {/* Phone */}
        <div>
          <label>Phone:</label>
          <br />

          <input
            type="text"
            name="phone"
            placeholder="Enter 10-digit phone number"
            required
          />
        </div>

        <br />

        {/* Course */}
        <div>
          <label>Course:</label>
          <br />

          <select name="course" required>
            <option value="">Select Course</option>
            <option value="B.Tech CSE">
              B.Tech CSE
            </option>
            <option value="BCA">
              BCA
            </option>
            <option value="MCA">
              MCA
            </option>
          </select>
        </div>

        <br />

        {/* File Upload */}
        <div>
          <label>Upload Document:</label>
          <br />

          <input
            type="file"
            name="document"
            accept=".pdf"
          />

          <p>
            Only PDF files up to 2 MB are allowed.
          </p>
        </div>

        <br />

        {/* Submit */}
        <button type="submit">
          Register Student
        </button>

      </form>

      <br />

      {/* Message */}
      {message && <p>{message}</p>}
    </div>
  );
}

