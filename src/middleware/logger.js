const logger = store => next => (action) => {
  window.console.group(action.type);
  window.console.log('The action: ', action);
  const returnValue = next(action);
  window.console.log('The new state: ', store.getState());
  window.console.groupEnd();
  return returnValue;
};

export default logger;
