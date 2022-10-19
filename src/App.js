import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [value, setValue] = useState(new Set([]));
    const ans = [];

    for (let i = 2; i <= 50; i++) {
        if (i % 2 != 0) {
            ans.push(i);
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
