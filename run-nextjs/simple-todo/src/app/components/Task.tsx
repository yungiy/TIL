'use client';

import { FormEventHandler, useState } from 'react';
import { ITask } from '../../../types/tasks';
import { FiEdit } from 'react-icons/fi';
import { FiTrash } from 'react-icons/fi';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { eidtTodo, deleteTodo } from '../../../api';

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await eidtTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-3'>
        <FiEdit
          onClick={() => {
            setOpenModalEdit(true);
          }}
          cursor='pointer'
          className='text-blue-700'
          size={23}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className='font-bold text-lg'>할 일을 수정할 수 있습니다.</h3>
            <div className='modal-action'>
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
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
        <FiTrash
          onClick={() => setOpenModalDelete(true)}
          cursor='pointer'
          className='text-red-700'
          size={23}
        />
        <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
          <h3 className='text-lg'>삭제하시겠습니까?</h3>
          <div className='modal-action'>
            <button className='btn w-full' onClick={() => handleDeleteTask(task.id)}>
              예
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
}
