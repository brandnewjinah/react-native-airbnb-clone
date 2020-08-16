import { ParamListBase } from '@react-navigation/routers';
import { NavigationProp } from './types';
/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
export default function useNavigation<T extends NavigationProp<ParamListBase>>(): T;
