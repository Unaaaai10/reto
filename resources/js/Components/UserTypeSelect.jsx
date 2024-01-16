import React from "react";

export default function UserTypeSelect() {
    return (
      <label>
        <select name="userType">
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
      </label>
    );
  }