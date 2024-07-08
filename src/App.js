import { Provider } from "react-redux";
import Body from "./components/Body";
import BodyContainer from "./components/BodyContainer";
import appStore from "./store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

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
      },
      {
        path: '/results',
        element: <SearchResults/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;