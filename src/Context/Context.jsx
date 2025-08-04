import React, { createContext, useState } from 'react'

export const MyStore = createContext()

const Context = ({children}) => {
 const [formData, setFormData] = useState(() => {
 const saved = localStorage.getItem('formData');
    return saved ? JSON.parse(saved) : [];
 });

  const [toggle, setToggle] = useState(false);


  

const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem('theme') || 'light';
});


const toggleTheme = () => {
  const newTheme = isDark === "dark" ? "light" : "dark";
  setIsDark(newTheme);
  localStorage.setItem('theme', newTheme); 
};

  return (




    <MyStore.Provider value={{formData, setFormData, toggle, setToggle, isDark, setIsDark ,toggleTheme}}>
        {children}
    </MyStore.Provider>
  )
}

export default Context