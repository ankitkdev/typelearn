import React, { useReducer,createContext} from 'react';
import './App.css';
import { actionType, actionTypep, initialState, reducer } from './reducer';
import User from './User';

type contextType={
  state: typeof initialState,
  dispatch: React.Dispatch<actionType | actionTypep>
}
export const UserContext = createContext({} as contextType)

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <>
      <User/>
    </>
    </UserContext.Provider>
  );
}

export default App;
