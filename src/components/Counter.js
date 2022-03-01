import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)

  const dispatch = useDispatch();

  const counterIncrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const counterDecrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={counterIncrementHandler}>Increment</button>
        <button onClick={counterDecrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from "react";
// import { connect } from 'react-redux'

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {

//   }

//   render () {
//     return (
//       <main className={classes.counter}>
//        <h1>Redux Counter</h1> 
//        <div className={classes.value}>{this.props.counter}</div>
//        <div>
//          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//        </div>
//        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//      </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter 
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment : () => dispatch({ type: 'increment' }),
//     decrement : () => dispatch({ type: 'decrement' })
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)