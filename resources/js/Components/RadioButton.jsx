import { forwardRef, useEffect, useRef } from 'react';

export default function MyForm() {
    return (
      <div>
        <p>
          <label>
            <input type="radio" name="userType" value="teacher" />
            Teacher
          </label>
          <br></br>
          <label>
            <input type="radio" name="userType" value="student" />
            Student
          </label>
        </p>
      </div>
    );
  }
  
