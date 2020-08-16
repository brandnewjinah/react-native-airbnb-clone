import * as React from 'react';
export default function useDevTools({
  name,
  reset,
  state,
  enabled
}) {
  const devToolsRef = React.useRef();

  if (enabled && process.env.NODE_ENV !== 'production' && global.__REDUX_DEVTOOLS_EXTENSION__ && devToolsRef.current === undefined) {
    devToolsRef.current = global.__REDUX_DEVTOOLS_EXTENSION__.connect({
      name
    });
  }

  const devTools = devToolsRef.current;
  const lastStateRef = React.useRef(state);
  const actions = React.useRef([]);
  React.useEffect(() => {
    devTools === null || devTools === void 0 ? void 0 : devTools.init(lastStateRef.current);
  }, [devTools]);
  React.useEffect(() => devTools === null || devTools === void 0 ? void 0 : devTools.subscribe(message => {
    if (message.type === 'DISPATCH' && message.state) {
      reset(JSON.parse(message.state));
    }
  }), [devTools, reset]);
  const trackState = React.useCallback(getState => {
    if (!devTools) {
      return;
    }

    while (actions.current.length > 1) {
      devTools.send(actions.current.shift(), lastStateRef.current);
    }

    const state = getState();

    if (actions.current.length) {
      devTools.send(actions.current.pop(), state);
    } else {
      devTools.send('@@UNKNOWN', state);
    }

    lastStateRef.current = state;
  }, [devTools]);
  const trackAction = React.useCallback(action => {
    if (!devTools) {
      return;
    }

    actions.current.push(action);
  }, [devTools]);
  return {
    trackAction,
    trackState
  };
}
//# sourceMappingURL=useDevTools.js.map