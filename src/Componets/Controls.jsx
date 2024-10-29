import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterAction, privacyAction } from ".";

function Controls() {
  const dispatch = useDispatch();
  const inputE = useRef();

  const handleIncreament = () => {
    dispatch(counterAction.increment());
  };
  const privacyTogglehandler = () => {
    dispatch(privacyAction.toggle());
  };
  const handleDecreament = () => {
    dispatch(counterAction.decrement());
  };
  const handleSub = () => {
    dispatch(counterAction.subtract(inputE.current.value));
    inputE.current.value = "";
  };
  const handleAdd = () => {
    dispatch(counterAction.add(inputE.current.value));
    inputE.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncreament}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecreament}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={privacyTogglehandler}
        >
          Privacy Toggle
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter Number"
        className="rows"
        ref={inputE}
      />
      <button
        type="button"
        className="btn btn-danger space"
        onClick={handleAdd}
      >
        Add
      </button>
      <button type="button" className="btn btn-dark " onClick={handleSub}>
        Subtract
      </button>
    </>
  );
}

export default Controls;
