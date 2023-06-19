// const action = {
//     type: 'INCREMENT_COUNTER',
//     payload: 10
//   }

  // actionCreator
export const actionCreator = (increment = 1) => ({
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });