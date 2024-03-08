import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { EventProvider } from "./context/EventProvider";

function App() {
  return (
    <BrowserRouter>
      <EventProvider>
        <Router />
      </EventProvider>
    </BrowserRouter>
  );
}

export default App;
