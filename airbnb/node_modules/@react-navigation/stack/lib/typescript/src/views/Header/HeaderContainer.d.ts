import { StyleProp, ViewStyle } from 'react-native';
import { Route } from '@react-navigation/native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Layout, Scene, StackHeaderStyleInterpolator, GestureDirection } from '../../types';
export declare type Props = {
    mode: 'float' | 'screen';
    layout: Layout;
    insets: EdgeInsets;
    scenes: (Scene<Route<string>> | undefined)[];
    getPreviousRoute: (props: {
        route: Route<string>;
    }) => Route<string> | undefined;
    getFocusedRoute: () => Route<string>;
    onContentHeightChange?: (props: {
        route: Route<string>;
        height: number;
    }) => void;
    styleInterpolator: StackHeaderStyleInterpolator;
    gestureDirection: GestureDirection;
    style?: StyleProp<ViewStyle>;
};
export default function HeaderContainer({ mode, scenes, layout, insets, getFocusedRoute, getPreviousRoute, onContentHeightChange, gestureDirection, styleInterpolator, style, }: Props): JSX.Element;
