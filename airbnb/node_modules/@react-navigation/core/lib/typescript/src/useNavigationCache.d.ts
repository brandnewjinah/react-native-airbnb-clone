import { NavigationAction, ParamListBase, NavigationState, Router } from '@react-navigation/routers';
import { NavigationEventEmitter } from './useEventEmitter';
import { NavigationHelpers, NavigationProp } from './types';
declare type Options<State extends NavigationState> = {
    state: State;
    getState: () => State;
    navigation: NavigationHelpers<ParamListBase> & Partial<NavigationProp<ParamListBase, string, any, any, any>>;
    setOptions: (cb: (options: Record<string, object>) => Record<string, object>) => void;
    router: Router<State, NavigationAction>;
    emitter: NavigationEventEmitter;
};
declare type NavigationCache<State extends NavigationState, ScreenOptions extends object> = {
    [key: string]: NavigationProp<ParamListBase, string, State, ScreenOptions>;
};
/**
 * Hook to cache navigation objects for each screen in the navigator.
 * It's important to cache them to make sure navigation objects don't change between renders.
 * This lets us apply optimizations like `React.memo` to minimize re-rendering screens.
 */
export default function useNavigationCache<State extends NavigationState, ScreenOptions extends object>({ state, getState, navigation, setOptions, router, emitter, }: Options<State>): NavigationCache<State, ScreenOptions>;
export {};
