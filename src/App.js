import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide } from "./components/Calculator/calculatorSlice";

function App() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const result = useSelector((state) => state.calculator.result);
    const dispatch = useDispatch();

    const Addnum = () => {
        if (!num1 || !num2) {
            alert("заполните оба поля");
            return;
        }
        dispatch(add({ num1: +num1, num2: +num2 }));
    };

    const Subtractnum = () => {
        if (!num1 || !num2) {
            alert("заполните оба поля");
            return;
        }
        dispatch(subtract({ num1: +num1, num2: +num2 }));
    };

    const Multiplynum = () => {
        if (!num1 || !num2) {
            alert("заполните оба поля");
            return;
        }
        dispatch(multiply({ num1: +num1, num2: +num2 }));
    };

    const Dividenum = () => {
        if (!num1 || !num2) {
            alert("заполните оба поля");
            return;
        }
        dispatch(divide({ num1: +num1, num2: +num2 }));
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={Addnum}>+</button>
            <button onClick={Subtractnum}>-</button>
            <button onClick={Multiplynum}>*</button>
            <button onClick={Dividenum}>/</button>
            <div>{result}</div>
        </div>
    );
}

export default App;
