import { useContext } from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { MyStore } from "./comtext/Context";

function App() {
  const { formData, toggle, isDark, toggleTheme } = useContext(MyStore);

  return (
    <div
      className={`min-h-screen p-4 flex flex-col gap-6 justify-center transition-all 
  ${isDark === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="w-full flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 mb-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {isDark === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}

        </button>
      </div>

      {toggle ? <LoginForm /> : <RegisterForm />}

      {/* Registered Users List */}
      <div className="sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto border-t pt-4 border-gray-300 ">
        <h2 className="text-lg font-bold mb-2">Registered Users</h2>
        {formData?.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No users registered yet.
          </p>
        ) : (
          <ul className="space-y-2">
            {formData.map((user, index) => (
              <li
                key={index}
                className="border p-3 rounded text-black bg-gray-100 dark:bg-gray-100"
              >
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Password:</strong> {user.password}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
