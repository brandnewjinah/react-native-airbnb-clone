import { NavigationState, PartialState, Router, DefaultRouterOptions, ParamListBase } from './types';
export declare type TabActionType = {
    type: 'JUMP_TO';
    payload: {
        name: string;
        params?: object;
    };
    source?: string;
    target?: string;
};
export declare type BackBehavior = 'initialRoute' | 'order' | 'history' | 'none';
export declare type TabRouterOptions = DefaultRouterOptions & {
    backBehavior?: BackBehavior;
};
export declare type TabNavigationState = Omit<NavigationState, 'history'> & {
    /**
     * Type of the router, in this case, it's tab.
     */
    type: 'tab';
    /**
     * List of previously visited route keys.
     */
    history: {
        type: 'route';
        key: string;
    }[];
};
export declare type TabActionHelpers<ParamList extends ParamListBase> = {
    /**
     * Jump to an existing tab.
     *
     * @param name Name of the route for the tab.
     * @param [params] Params object for the route.
     */
    jumpTo<RouteName extends Extract<keyof ParamList, string>>(...args: ParamList[RouteName] extends undefined | any ? [RouteName] | [RouteName, ParamList[RouteName]] : [RouteName, ParamList[RouteName]]): void;
};
export declare const TabActions: {
    jumpTo(name: string, params?: object | undefined): TabActionType;
};
export default function TabRouter({ initialRouteName, backBehavior, }: TabRouterOptions): Router<TabNavigationState, {
    type: "GO_BACK";
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "NAVIGATE";
    payload: {
        key: string;
        name?: undefined;
        params?: object | undefined;
    } | {
        name: string;
        key?: string | undefined;
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "RESET";
    payload: PartialState<NavigationState>;
    source?: string | undefined;
    target?: string | undefined;
} | {
    type: "SET_PARAMS";
    payload: {
        params?: object | undefined;
    };
    source?: string | undefined;
    target?: string | undefined;
} | TabActionType>;
