"use server";

let students = [];

export async function addStudent(formData) {   //named export
  const name = formData.get("name");
  const email = formData.get("email");
  const course = formData.get("course");
  const file = formData.get("document");

  // Server-side validation
  if (!name || !email || !course) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Enter a valid email.",
    };
  }

  // File validation
  if (file && file.size > 0) {
    if (file.type !== "application/pdf") {
      return {
        success: false,
        message: "Only PDF files are allowed.",
      };
    }

    if (file.size > 2 * 1024 * 1024) {
      return {
        success: false,
        message: "File must be less than 2 MB.",
      };
    }
  }

  const student = {
    id: Date.now(),
    name,
    email,
    course,
  };

  students.push(student);

  return {
    success: true,
    message: "Student registered successfully!",
    student,
  };
}

export async function deleteStudent(id) {
  students = students.filter((student) => student.id !== id);

  return {
    success: true,
  };
}





























export async function saveLike() {
  // Simulate server/database delay
  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  // Simulate success or failure
  const success = Math.random() > 0.5;

  if (!success) {
    throw new Error("Like failed");
  }

  return {
    success: true
  };
}