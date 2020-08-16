import { NavigationAction, NavigationState, PartialState, Router, RouterConfigOptions } from '@react-navigation/routers';
import { ChildActionListener } from './NavigationBuilderContext';
declare type Options = {
    router: Router<NavigationState, NavigationAction>;
    key?: string;
    getState: () => NavigationState;
    setState: (state: NavigationState | PartialState<NavigationState>) => void;
    listeners: ChildActionListener[];
    routerConfigOptions: RouterConfigOptions;
};
/**
 * Hook to handle actions for a navigator, including state updates and bubbling.
 *
 * Bubbling an action is achieved in 2 ways:
 * 1. To bubble action to parent, we expose the action handler in context and then access the parent context
 * 2. To bubble action to child, child adds event listeners subscribing to actions from parent
 *
 * When the action handler handles as action, it returns `true`, otherwise `false`.
 */
export default function useOnAction({ router, getState, setState, key, listeners, routerConfigOptions, }: Options): (action: NavigationAction, visitedNavigators?: Set<string>) => boolean;
export {};
