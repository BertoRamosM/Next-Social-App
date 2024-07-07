'use client'

import { useFormStatus } from "react-dom"


const UpdateButton = () => {
  const { pending} = useFormStatus()
  return (
      <button
        className="bg-red-500 p-2 mt-2 rounded-md text-white w-full hover:opacity-80 disabled:bg-opacity-50 disabled:cursor-not-allowed"
        disabled={pending}
    >
      {pending ? "Updating..." : 'Update'}
      </button>
  );
}

export default UpdateButton