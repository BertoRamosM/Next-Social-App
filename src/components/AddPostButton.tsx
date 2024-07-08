'use client'
import React from 'react'
import { useFormStatus } from 'react-dom';

const AddPostButton = () => {
  const {pending} = useFormStatus()
  return ( 
    <button className="flex items-center justify-center bg-red-500 text-white p-2 h-1/2 rounded-lg hover:opacity-75 self-center disabled:bg-gray-600 disabled:cursor-not-allowed" disabled={pending}>
      {pending ? <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1s_linear_infinite] dark:text-red-500"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">            </span>
          </div> : "Send"}
    </button>
  );
}

export default AddPostButton