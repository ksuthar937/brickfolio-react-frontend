import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Filter />
      <Products />
    </Provider>
  );
}

export default App;
