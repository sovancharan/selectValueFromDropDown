import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState(new Set([]));
    const ans = [];

    for (var counter = 0; counter <= 50; counter++) {
        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            //          console.log(counter);
            ans.push(counter);
        }
    }

    const handleChange = (e) => {
        let val = e.target.value;

        setValue([...value, val]);
    };
    console.log(value);

    return (
        <div className="App">
            <div class="dropdown">
                <select
                    onChange={handleChange}
                    class="form-select"
                    aria-label="Default select example"
                >
                    <option value="0">0</option>
                    {ans.map((value, index) => {
                        return <option value={value}>{value}</option>;
                    })}
                </select>
            </div>
        </div>
    );
}

export default App;
