import { FocusedNavigationListener } from './NavigationBuilderContext';
/**
 * Hook which lets child navigators add listeners to be called for focused navigators.
 */
export default function useFocusedListeners(): {
    listeners: FocusedNavigationListener[];
    addListener: (listener: FocusedNavigationListener) => () => void;
};
