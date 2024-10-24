import Body from "./component/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
