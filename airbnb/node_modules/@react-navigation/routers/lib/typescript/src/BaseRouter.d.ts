import { NavigationState, PartialState } from './types';
/**
 * Base router object that can be used when writing custom routers.
 * This provides few helper methods to handle common actions such as `RESET`.
 */
declare const BaseRouter: {
    getStateForAction<State extends NavigationState>(state: State, action: import("./CommonActions").Action): State | PartialState<State> | null;
    shouldActionChangeFocus(action: import("./CommonActions").Action): boolean;
};
export default BaseRouter;
