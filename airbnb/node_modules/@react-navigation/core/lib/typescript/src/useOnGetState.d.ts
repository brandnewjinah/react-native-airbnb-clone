import { NavigationState } from '@react-navigation/routers';
export default function useOnGetState({ getStateForRoute, getState, }: {
    getStateForRoute: (routeName: string) => NavigationState | undefined;
    getState: () => NavigationState;
}): void;
