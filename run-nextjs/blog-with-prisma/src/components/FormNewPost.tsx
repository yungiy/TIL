'use client';

import ReactTextareaAutosize from 'react-textarea-autosize';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormData } from '@/types/blogs';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const inputClass =
  'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none';

export default function FormNewPost() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
  });

  const { data } = useSession();
  const router = useRouter();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/posts', formData);

      if (response.status === 200) {
        router.push(`/blogs/${response.data.newPost.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='max-w-6xl mx-auto p-4' onSubmit={handleSubmit}>
      <div className='mb-4'>
        <input
          type='text'
          className={inputClass}
          placeholder='제목을 입력해주세요.'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <ReactTextareaAutosize
          minRows={5}
          className={inputClass}
          name='content'
          placeholder='본문을 작성해주세요.'
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        disabled={!data?.user?.email}
        type='submit'
        className='bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-yellow-200 w-full disabled:bg-red-400'
      >
        게시물 올리기
      </button>
    </form>
  );
}
