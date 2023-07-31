//import logo from './logo.svg';
import "./App.css";
import FormText from "./components/FormText";
import Navi from "./components/Navi";
import Abt from "./components/Abt";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled ", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled ", "Success");
    }
  };
  return (
    <>
      <Main>
        <Navi
          title="Text_tool"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<Abt />} />
            <Route
              exact
              path="/"
              element={
                <FormText
                  showAlert={showAlert}
                  heading="Welcome Friend !"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Main>
    </>
  );
}

export default App;
