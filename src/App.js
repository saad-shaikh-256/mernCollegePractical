import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form2 from "./component/Form2";
// import Form from "./component/Form";
// import FormValidation from "./component/FormValidation";
import Lstoreage from "./component/Lstoreage";
// import demo from "./component/demo";
import Display from "./component/Display";

// Importing Components
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Table from "./Pages/Table";
import Counter from "./Pages/Counter";
import Calculator from "./Pages/Calculator";
// import Form from "./Pages/Form";
import Footer from "./Pages/Footer";

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
        <demo />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/localstorage" Component={Lstoreage}></Route>
          <Route
            path="/table"
            element={<Table studentMarks={studentMarks} />}
          ></Route>
          <Route
            path="/display"
            element={<Display />}
          ></Route>
          <Route path="/counter" Component={Counter}></Route>
          <Route path="/calculator" Component={Calculator}></Route>
        </Routes>
        {/* <FormValidation /> */}

        {/* <Form/> */}
        {/* <Form2 /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
