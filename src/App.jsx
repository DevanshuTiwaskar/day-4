import { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [formData, setFormData] = useState([]);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 flex flex-col gap-6 justify-center ">
      {toggle ? (
        <LoginForm
          setFormData={setFormData}
          formData={formData}
          setToggle={setToggle}
        />
      ) : (
        <RegisterForm
          formData={formData}
          setFormData={setFormData}
          setToggle={setToggle}
        />
      )}


<div className='w-[60%] mx-auto border-t pt-4'>
        <h2 className='text-lg font-bold mb-2'>Registered Users</h2>
        {formData.length === 0 ? (
          <p className='text-gray-500'>No users registered yet.</p>
        ) : (
          <ul className='space-y-2'>
            {formData.map((user, index) => (
              <li key={index} className='border p-3 rounded bg-gray-100'>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Password:</strong> {user.password}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>



  );
}

export default App;
