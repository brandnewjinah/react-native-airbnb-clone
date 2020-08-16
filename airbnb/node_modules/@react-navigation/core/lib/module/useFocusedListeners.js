import * as React from 'react';

/**
 * Hook which lets child navigators add listeners to be called for focused navigators.
 */
export default function useFocusedListeners() {
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
//# sourceMappingURL=useFocusedListeners.js.map