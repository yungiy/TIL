'use clinet';

import { counterAtom } from '@/atoms/counter';
import { useAtomValue, useSetAtom } from 'jotai';

export default function CounterChild() {
  const count = useAtomValue(counterAtom);
  const setCount = useSetAtom(counterAtom);

  return (
    <div>
      <h1>리셋버튼</h1>
      <div>{count}</div>
      <button onClick={() => setCount(0)}>리셋</button>
    </div>
  );
}
