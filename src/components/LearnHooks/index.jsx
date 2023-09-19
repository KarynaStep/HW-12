import React, {useState} from 'react';

// const LearnHooks = () => {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1)
//   const [isAdd, setIsAdd] = useState(true);


//   const handleClick =  () => {
//     setCount((count) => (isAdd ? count + step : count - step));
//     console.log(count);
//   }
  
//   const handleSwitch = () => {
//     setIsAdd(!isAdd)
//   }
//   const handleChange = ({target: {value}}) => {
//     setStep(Number(value))
//   }

//   return (
//     <div>
//       <h2>LearnHooks</h2>
//       <h3>Count: {count}</h3>
//       <button onClick={handleClick}>{ isAdd ? "+" : "-"}</button>
//       <button onClick={handleSwitch}>switch</button>
//       <label>
//         step: <input value={step} onChange={handleChange} />
//       </label>
//     </div>
//   );
// };

// export default LearnHooks;


const LearnHooks = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleClick = (event) => {
    setCoords({ x: event.clientX, y: event.clientY});
  }
  return (
    <div style={{border: '1px solid red'}} onClick={handleClick}>
      <h2>coords : x {coords.x}, y {coords.y }</h2>
    </div>
  );
};

export default LearnHooks;
