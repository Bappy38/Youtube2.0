import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./store/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header/>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;