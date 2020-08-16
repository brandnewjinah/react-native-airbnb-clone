function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { CommonActions } from '@react-navigation/routers';
import NavigationContext from './NavigationContext';
import { PrivateValueStore } from './types'; // This is to make TypeScript compiler happy
// eslint-disable-next-line babel/no-unused-expressions

PrivateValueStore;

/**
 * Navigation object with helper methods to be used by a navigator.
 * This object includes methods for common actions as well as methods the parent screen's navigation object.
 */
export default function useNavigationHelpers({
  onAction,
  getState,
  emitter,
  router
}) {
  const parentNavigationHelpers = React.useContext(NavigationContext);
  return React.useMemo(() => {
    const dispatch = op => {
      const action = typeof op === 'function' ? op(getState()) : op;
      const handled = onAction(action);

      if (!handled && process.env.NODE_ENV !== 'production') {
        const payload = action.payload;
        let message = "The action '".concat(action.type, "'").concat(payload ? " with payload ".concat(JSON.stringify(action.payload)) : '', " was not handled by any navigator.");

        switch (action.type) {
          case 'NAVIGATE':
          case 'PUSH':
          case 'REPLACE':
          case 'JUMP_TO':
            if (payload === null || payload === void 0 ? void 0 : payload.name) {
              message += "\n\nDo you have a screen named '".concat(payload.name, "'?\n\nIf you're trying to navigate to a screen in a nested navigator, see https://reactnavigation.org/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator.");
            } else {
              message += "\n\nYou need to pass the name of the screen to navigate to.\n\nSee https://reactnavigation.org/docs/navigation-actions for usage.";
            }

            break;

          case 'GO_BACK':
          case 'POP':
          case 'POP_TO_TOP':
            message += "\n\nIs there any screen to go back to?";
            break;

          case 'OPEN_DRAWER':
          case 'CLOSE_DRAWER':
          case 'TOGGLE_DRAWER':
            message += "\n\nIs your screen inside a Drawer navigator?";
            break;
        }

        message += "\n\nThis is a development-only warning and won't be shown in production.";
        console.error(message);
      }
    };

    const actions = _objectSpread(_objectSpread({}, router.actionCreators), CommonActions);

    const helpers = Object.keys(actions).reduce((acc, name) => {
      // @ts-ignore
      acc[name] = (...args) => dispatch(actions[name](...args));

      return acc;
    }, {});
    return _objectSpread(_objectSpread(_objectSpread({}, parentNavigationHelpers), helpers), {}, {
      dispatch,
      emit: emitter.emit,
      isFocused: parentNavigationHelpers ? parentNavigationHelpers.isFocused : () => true,
      canGoBack: () => {
        const state = getState();
        return router.getStateForAction(state, CommonActions.goBack(), {
          routeNames: state.routeNames,
          routeParamList: {}
        }) !== null || (parentNavigationHelpers === null || parentNavigationHelpers === void 0 ? void 0 : parentNavigationHelpers.canGoBack()) || false;
      },
      dangerouslyGetParent: () => parentNavigationHelpers,
      dangerouslyGetState: getState
    });
  }, [router, getState, parentNavigationHelpers, emitter.emit, onAction]);
}
//# sourceMappingURL=useNavigationHelpers.js.map