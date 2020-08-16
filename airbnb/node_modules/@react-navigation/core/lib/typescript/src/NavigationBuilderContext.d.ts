import * as React from 'react';
import { NavigationAction, NavigationState, ParamListBase } from '@react-navigation/routers';
import { NavigationHelpers } from './types';
export declare type ChildActionListener = (action: NavigationAction, visitedNavigators?: Set<string>) => boolean;
export declare type FocusedNavigationCallback<T> = (navigation: NavigationHelpers<ParamListBase>) => T;
export declare type FocusedNavigationListener = <T>(callback: FocusedNavigationCallback<T>) => {
    handled: boolean;
    result: T;
};
export declare type NavigatorStateGetter = () => NavigationState;
/**
 * Context which holds the required helpers needed to build nested navigators.
 */
declare const NavigationBuilderContext: React.Context<{
    onAction?: ((action: NavigationAction, visitedNavigators?: Set<string> | undefined) => boolean) | undefined;
    addActionListener?: ((listener: ChildActionListener) => void) | undefined;
    addFocusedListener?: ((listener: FocusedNavigationListener) => void) | undefined;
    onRouteFocus?: ((key: string) => void) | undefined;
    addStateGetter?: ((key: string, getter: NavigatorStateGetter) => void) | undefined;
    trackAction: (action: NavigationAction) => void;
}>;
export default NavigationBuilderContext;
