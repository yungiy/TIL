'use client';
import { FormInputPost } from '@/types/FormPost';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean
}

export default function FormPost({ submit, isEditing }: FormPostProps) {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className='flex flex-col items-center justify-center gap-5 mt-10'
    >
      <input
        type='text'
        {...register('title', { required: true })}
        placeholder='제목을 작성해주세요'
        className='input input-bordered w-full max-w-lg'
      ></input>
      <textarea
        {...register('content', { required: true })}
        className='textarea textarea-bordered w-full max-w-lg'
        placeholder='내용을 입력해주세요'
      ></textarea>

      <select
        {...register('tag', { required: true })}
        className='select select-bordered w-full max-w-lg'
        defaultValue={''}
      >
        <option disabled selected>
          분야를 선택해주세요.
        </option>
        <option>서버</option>
        <option>데이터베이스</option>
        <option>프론트</option>
        <option>AI</option>
      </select>
      <button type='submit' className='btn w-full max-w-lg'>
      {isEditing ? '업로드' : '수정'}
      </button>
    </form>
  );
}
