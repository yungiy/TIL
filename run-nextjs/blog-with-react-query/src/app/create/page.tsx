'use client'

import FormPost from '@/components/FormPost';
import { FormInputPost } from '@/types/FormPost';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';

export default function CreatePage() {

  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data)
  };
  return (
    <div>
      <h1 className='text-3xl my-4 font-semobold text-center'>새로운 포스트를 작성할 수 있습니다.</h1>
      <FormPost submit={handleCreatePost} isEditing={true} />
    </div>
  );
}
