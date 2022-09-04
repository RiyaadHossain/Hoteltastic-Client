import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

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
