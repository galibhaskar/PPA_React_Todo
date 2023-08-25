import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/context";
import Todo from "./todo";
import NavBar from "./NavBar";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route
            path="normal"
            element={
              <UserProvider>
                <App />
              </UserProvider>
            }
          />

          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
