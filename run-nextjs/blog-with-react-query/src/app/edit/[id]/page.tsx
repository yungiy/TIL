'use client'
import FormPost from '@/components/FormPost';
import { FormInputPost } from '@/types/FormPost';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';

export default function EditPostPage() {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data)
  };
  return (
    <div>
      <h1 className='text-3xl my-4 font-semobold text-center'>포스트를 수정할 수 있습니다.</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
}
 