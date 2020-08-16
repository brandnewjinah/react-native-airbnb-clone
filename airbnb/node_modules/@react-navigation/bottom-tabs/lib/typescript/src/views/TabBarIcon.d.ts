import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import type { Route } from '@react-navigation/native';
declare type Props = {
    route: Route<string>;
    size: number;
    activeOpacity: number;
    inactiveOpacity: number;
    activeTintColor: string;
    inactiveTintColor: string;
    renderIcon: (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => React.ReactNode;
    style: StyleProp<ViewStyle>;
};
export default function TabBarIcon({ activeOpacity, inactiveOpacity, activeTintColor, inactiveTintColor, renderIcon, size, style, }: Props): JSX.Element;
export {};
