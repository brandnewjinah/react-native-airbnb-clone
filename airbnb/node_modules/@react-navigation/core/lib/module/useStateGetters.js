import * as React from 'react';

/**
 * Hook which lets child navigators add getters to be called for obtaining rehydrated state.
 */
export default function useStateGetters() {
  const stateGetters = React.useRef({});
  const getStateForRoute = React.useCallback(routeKey => stateGetters.current[routeKey] === undefined ? undefined : stateGetters.current[routeKey](), [stateGetters]);
  const addStateGetter = React.useCallback((key, getter) => {
    stateGetters.current[key] = getter;
    return () => {
      // @ts-ignore
      stateGetters.current[key] = undefined;
    };
  }, []);
  return {
    getStateForRoute,
    addStateGetter
  };
}
//# sourceMappingURL=useStateGetters.js.map