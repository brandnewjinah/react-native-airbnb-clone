import { NavigationState } from '@react-navigation/routers';
import { NavigationEventEmitter } from './useEventEmitter';
declare type Options = {
    state: NavigationState;
    emitter: NavigationEventEmitter;
};
/**
 * Hook to take care of emitting `focus` and `blur` events.
 */
export default function useFocusEvents({ state, emitter }: Options): void;
export {};
