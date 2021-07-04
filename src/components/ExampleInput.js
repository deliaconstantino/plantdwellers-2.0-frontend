import react, { useState, useEffect } from "react";

function ExampleInput({ initialText = "", initialBorderColor = "black" }) {
  // { initialText = "" } : this is how you do object destructing default values - initialText is a prop that is passed
  // in to this component, and it's default value (if nothing else is supplied) is an empty string
  const [text, setText] = useState(initialText);
  const [borderColor, setBorderColor] = useState(initialBorderColor);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    console.log("effect happening");
  }, []);
  // without a second parameter passed in to useEffect, it will call your callback funciton on EVERY render (so every time state changes bc state
  // changes casue component to re-render)
 // passing in an empty array as the secind arg [] is the equivalent of component did mount - so useEffect will be called once, the first time the component renders/mounts

  useEffect(() => {
    console.log("focus changed", isFocused);
  }, [isFocused]);
  // here the second parameter is an array of state elements that you want useEffect to be called when their state changes. Can pass in
  // on or more state elements. Could also have mutliple, independent useEffect functions.

  function handleChange(event) {
    setText(event.target.value);
    //^ this is like saying this.setState({
    // [event.target.name]: event.target.names
    // })
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  return (
    <>
      <textarea
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ border: `1px solid ${borderColor}` }}
        onChange={handleChange}
        value={text}
      />
      <p>{text}</p>
    </>
  );
}

export default ExampleInput;

// text area with controlled input/state
// while a user types, update the state with their input and simulatneously
// display that below
// will receive initial state, which gets overridden by user input
// props and state
// local state

// hook called useState() - when you call it it returns an array of 2 elements:
// the first value is your state value
// second value is your setter function

//pass initialState into useState() at top of functional component: useState(initialState);
// and destructure the return of this call into two variable: specificStateName and setSpecificStateName

// in a class component, state is a single object - each key corresponds to one piece of your state
// in a functional component, you have state but they're variables and are the result of calling useState. Here you don't have to
// worry about preserving the rest of your state if you update a part of your state , bc all state is updated indepently by it's setter function

// also useEffect() another common hook - often part of lifecycle methods
//you pass it a callback, can have it just run once at beg (like as componentDidMount replacement) or can have it run
// anytime a part of your state changes.
