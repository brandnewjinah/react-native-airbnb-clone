import { NavigationState, PartialState } from './types';
export declare type Action = {
    type: 'GO_BACK';
    source?: string;
    target?: string;
} | {
    type: 'NAVIGATE';
    payload: {
        key: string;
        name?: undefined;
        params?: object;
    } | {
        name: string;
        key?: string;
        params?: object;
    };
    source?: string;
    target?: string;
} | {
    type: 'RESET';
    payload: PartialState<NavigationState>;
    source?: string;
    target?: string;
} | {
    type: 'SET_PARAMS';
    payload: {
        params?: object;
    };
    source?: string;
    target?: string;
};
export declare function goBack(): Action;
export declare function navigate(route: {
    key: string;
    params?: object;
} | {
    name: string;
    key?: string;
    params?: object;
}): Action;
export declare function navigate(name: string, params?: object): Action;
export declare function reset(state: PartialState<NavigationState>): Action;
export declare function setParams(params: object): Action;
