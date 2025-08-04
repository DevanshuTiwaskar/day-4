import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const RegisterForm = ({ setToggle, formData, setFormData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const registerUser = (data) => {
    setFormData([...formData, data])
    reset()
    toast.success("register success")
  }

  return (
    <div className='flex flex-col gap-6 items-center'>
      <form
        onSubmit={handleSubmit(registerUser)}
        className='flex flex-col gap-2 text-center w-[40%]'
      >
        <h1 className='font-bold text-xl'>Register</h1>
        <input
          {...register('name', { required: true })}
          className='border-2 p-3 rounded'
          type='text'
          placeholder='Name'
        />
          {errors.name ? <p>Enter your Name</p> : ""}
   


        <input
          {...register('email', { required: true })}
          className='border-2 p-3 rounded'
          type='text'
          placeholder='Email'
        />
          {errors.email ? <p>Enter your email</p> : ""}
        


        <input
          {...register('password', { required: true })}
          className='border-2 p-3 rounded'
          type='text'
          placeholder='Password'
        />
          {errors.password? <p>Enter  password</p> : ""}
       


        <input
          className='bg-blue-500 p-3 rounded cursor-pointer text-white font-semibold'
          type='submit'
          value='Submit'
        />
      </form>

      <p className='text-[0.8rem]'>
        Already have an account?{' '}
        <span
          onClick={() => setToggle(true)}
          className='text-blue-600 cursor-pointer underline'
        >
          Login here
        </span>
      </p>

      {/* <div className='w-[60%] border-t pt-4'>
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
      </div> */}
    </div>
  )
}

export default RegisterForm
