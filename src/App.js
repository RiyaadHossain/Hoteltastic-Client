import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<SignIn/>} path="/signin" />
          <Route element={<SignUp/>} path="/signup" />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
