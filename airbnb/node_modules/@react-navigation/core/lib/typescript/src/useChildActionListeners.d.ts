import { ChildActionListener } from './NavigationBuilderContext';
/**
 * Hook which lets child navigators add action listeners.
 */
export default function useChildActionListeners(): {
    listeners: ChildActionListener[];
    addListener: (listener: ChildActionListener) => () => void;
};
