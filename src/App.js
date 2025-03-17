import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useEffectDemo from "./Component/useEffectDemo";

// Importing Components
import Header from "./Pages/Header";
  
import Home from "./Pages/Home";
import Table from "./Pages/Table";
import Counter from "./Pages/Counter";
import Calculator from "./Pages/Calculator";
import Form from "./Pages/Form";
import FormValidation from "./Pages/FormValidation";
import LocStorage from "./Pages/LocStorage";
import ShowLocalData from "./Pages/ShowLocalData";


import Footer from "./Pages/Footer";
import Parent from "./Component/Parent";
import useMemoDemo from "./Component/useMemoDemo";
import useMemoPractical from "./Component/useMemoPractical";

function App() {
  const studentMarks = [
    {
      name: "Saad",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Taleb",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Muzir",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Rayyan",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Ayesha",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Zara",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
    {
      name: "Ibrahim",
      marks1: Math.floor(Math.random() * 101),
      marks2: Math.floor(Math.random() * 101),
      marks3: Math.floor(Math.random() * 101),
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/useMemoDemo" Component={useMemoDemo}></Route>
          <Route path="/useMemoPractical" Component={useMemoPractical}></Route>
          <Route path="/useEffectDemo" Component={useEffectDemo}></Route>
          <Route path="/userContext" Component={Parent}></Route>


          <Route path="/" Component={Home}></Route>
          <Route path="/table" element={<Table studentMarks={studentMarks} />}></Route>
          <Route path="/counter" Component={Counter}></Route>
          <Route path="/calculator" Component={Calculator}></Route>
          <Route path="/calculator" Component={Calculator}></Route>
          <Route path="/form" Component={Form}></Route>
          <Route path="/formValidation" Component={FormValidation}></Route>
          <Route path="/localStorage" Component={LocStorage}></Route>
          <Route path="/showLocalData" Component={ShowLocalData}></Route>



        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
