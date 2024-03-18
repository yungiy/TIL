'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addTodo } from '../../api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue('');
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn w-full'>
        할 일 추가하기 <AiOutlinePlus className='ml-2' size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>오늘 해야할 일을 추가해 주세요.</h3>
          <div className='modal-action'>
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type='text'
              placeholder='할 일을 적어주세요'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn'>
              저장
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
