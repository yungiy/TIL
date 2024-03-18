import React from 'react';
import { ITask } from '../types/tasks';
import Task from './Task';

interface TodoListProps {
  tasks: ITask[];
}

export default function TodoList({ tasks }: TodoListProps) {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr className='text-center text-sm font-nomal text-gray-950'>
            <th>할 일</th>
            <th>수정 및 삭제</th>
          </tr>
        </thead>
        <tbody className='text-sm font-sans text-stone-800'>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
