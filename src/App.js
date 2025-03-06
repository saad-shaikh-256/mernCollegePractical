import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Calculator from "./component/calculator";
import Form2 from "./component/Form2";
// import Form from "./component/Form";

// Importing Components
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Table from "./Pages/Table";
import Counter from "./Pages/Counter";

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
          <Route path="/" Component={Home}></Route>
          <Route
            path="/table"
            element={<Table studentMarks={studentMarks} />}
          ></Route>
          <Route path="/counter" Component={Counter}></Route>
        </Routes>
        {/* <Form/> */}
        {/* <Form2 /> */}
        {/* <Calculator /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
