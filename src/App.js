import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { counterReducer } from "./pages/redux/counterReducer";
import MyRoutes from "./MyRoutes";
import './mystyle.css'
import { GlobalContextProvider } from "./pages/Hooks/GlobalContext";
import { myStore, myPersistor } from './pages/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  // const mystore = createStore(counterReducer)
  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor}>
          <GlobalContextProvider>
            <MyRoutes />
          </GlobalContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
