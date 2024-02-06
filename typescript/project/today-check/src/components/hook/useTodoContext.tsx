import React, { createContext, Dispatch, useContext, useReducer } from "react";

// 할 일 항목의 타입 정의
export type Todo = {
  id: number;
  text: string;
};

// 할 일 목록의 상태 타입 정의
type TodosState = Todo[];

// 할 일 목록의 상태를 제공할 Context 생성
const TodosStateContext = createContext<TodosState | undefined>(undefined);

// 액션 타입 정의
type Action = { type: "CREATE"; text: string } | { type: "REMOVE"; id: number };

// 할 일 목록 상태를 변경할 dispatch 함수의 타입 정의
type TodosDispatch = Dispatch<Action>;

// Dispatch 함수를 제공할 Context 생성
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

// 할 일 목록 상태를 변경하는 Reducer 함수 정의
function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "CREATE":
      // 새로운 할 일을 추가하면서 새로운 ID를 부여
      const nextId = Math.max(0, ...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.text,
      });
    case "REMOVE":
      // 지정된 ID를 가진 할 일을 제외한 나머지 할 일을 유지
      return state.filter((todo) => todo.id !== action.id);
    default:
      // 처리되지 않은 액션에 대한 에러 처리
      throw new Error("처리되지 못했습니다.");
  }
}

// 할 일 목록 상태와 dispatch 함수를 제공하는 Provider 컴포넌트 정의
export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // useReducer를 이용하여 상태와 dispatch 함수 생성
  const [todos, dispatch] = useReducer(todosReducer, []);

  // Provider 컴포넌트를 통해 Context에 상태와 dispatch 함수 제공
  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

// 할 일 목록 상태를 사용하는 Hook 정의
export function useTodosState() {

  // Context를 통해 할 일 목록 상태를 가져옴
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider를 찾을 수 없습니다.");
  return state;
}

// 할 일 목록 상태를 변경하는 Dispatch 함수를 사용하는 Hook 정의
export function useTodosDispatch() {

  // Context를 통해 dispatch 함수를 가져옴
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider를 찾을 수 없습니다.");
  return dispatch;
}
