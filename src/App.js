import { useReducer, createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";
import Navigation from "./Navigation";
import { reducer, initialState } from "./store/reducer";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

console.log("CIAO, IO SONO LO STATE", state);

  return (
    <div className='App'>
      <AppContext.Provider value={[state, dispatch]}>
        <Navigation />
        <Books />
        <Basket />
      </AppContext.Provider>
    </div>
  );
}

export default App;