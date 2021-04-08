import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./action";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello User</h1>
      <h2>Click + to increment and - to decrement!</h2>
      <div
      className="border border-dark rounded-circle"
        style={{
          padding: "35px",
          background: "skyblue",
          margin: "auto",
          display: "flex",
          width: "350px",
          justifyContent: "space-around",
        }} 
      >
        <h3>Counter {counter}</h3>
      </div>
      <div
        style={{
          padding: "100px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Button
          variant="primary"
          style={{ width: "100px" }}
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        {""}
        <Button
          variant="primary"
          style={{ width: "100px" }}
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>

      {isLogged ? <h3>Yaluable information I shoud not see</h3> : ""}
    </div>
  );
}
export default App;
