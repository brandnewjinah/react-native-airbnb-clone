import * as React from 'react';

/**
 * Hook which lets child navigators add action listeners.
 */
export default function useChildActionListeners() {
  const {
    current: listeners
  } = React.useRef([]);
  const addListener = React.useCallback(listener => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }, [listeners]);
  return {
    listeners,
    addListener
  };
}
//# sourceMappingURL=useChildActionListeners.js.map