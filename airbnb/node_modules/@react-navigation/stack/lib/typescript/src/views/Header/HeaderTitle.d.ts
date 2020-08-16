import * as React from 'react';
import { Animated } from 'react-native';
declare type Props = Omit<React.ComponentProps<typeof Animated.Text>, 'key'> & {
    tintColor?: string;
    children?: string;
};
export default function HeaderTitle({ tintColor, style, ...rest }: Props): JSX.Element;
export {};
