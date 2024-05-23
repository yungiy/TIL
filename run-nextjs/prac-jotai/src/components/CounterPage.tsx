'use client';

import { counterAtom } from '@/atoms/counter';
import { useAtom } from 'jotai';
import CounterChild from './Child';

export default function CounterPage() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div>
      <h1>증가감소 example</h1>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>증가</button>
      <button onClick={() => setCount((c) => c - 1)}>감소</button>
      <CounterChild />
    </div>
  );
}
