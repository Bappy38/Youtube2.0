import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import appStore from "./store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children: [
      {
        path: '/',
        element: <BodyContainer/>
      },
      {
        path: '/watch',
        element: <WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Header/>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;