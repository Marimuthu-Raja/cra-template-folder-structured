import React from "react";
import { Button } from "../../components";
import useStore from "../../store";
const Home = () => {
  const { counter, setCounter } = useStore(state => ({
    counter: state.counter,
    setCounter: state.setCounter
  }))
  return (
    <div className="container">
      <h1>{counter}</h1>
      <Button onClick={()=> setCounter(counter+1)}>Increment</Button>
      <br/>
      <Button onClick={()=> setCounter(counter-1)}>Decrement</Button>
    </div>
  )
};

export default Home;
