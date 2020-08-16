import { NavigationState, NavigationAction, PartialState } from '@react-navigation/routers';
declare type State = NavigationState | PartialState<NavigationState> | undefined;
declare type Options = {
    enabled: boolean;
    name: string;
    reset: (state: NavigationState) => void;
    state: State;
};
declare type DevTools = {
    init(value: any): void;
    send(action: any, value: any): void;
    subscribe(listener: (message: {
        type: string;
        [key: string]: any;
    }) => void): () => void;
};
declare global {
    namespace NodeJS {
        interface Global {
            __REDUX_DEVTOOLS_EXTENSION__: {
                connect(options: {
                    name: string;
                }): DevTools;
                disconnect(): void;
            } | undefined;
        }
    }
}
export default function useDevTools({ name, reset, state, enabled }: Options): {
    trackAction: (action: string | NavigationAction) => void;
    trackState: (getState: () => NavigationState | PartialState<NavigationState> | undefined) => void;
};
export {};
