import React, {useReducer} from 'react';

const initialState = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  password: "",
  age: "",
};
const reducer = (state, action) => {
  const { name, value } = action;
  const newState = {
    ...state,
    [name]: value,
  }
  return newState; //newState 
}

const AnketForm = () => {
const [state, dispatch]= useReducer(reducer, initialState)
  const handleInput = ({ target: { name, value } }) => {
    const action = {name, value};
  dispatch(action)
}
  return (
    <div>
      <input
        type="text"
        name="fname"
        value={state.fname}
        onChange={handleInput}
      />
      <input
        type="text"
        name="lname"
        value={state.lname}
        onChange={handleInput}
      />
      <input
        type="text"
        name="phone"
        value={state.phone}
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleInput}
      />
      <input
        type="numder"
        name="age"
        value={state.age}
        onChange={handleInput}
      />
      <input type="submit" value="send" />
    </div>
  );
};

export default AnketForm;
