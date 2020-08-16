import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/core';
import { LinkingOptions } from './types';
export default function useLinking(ref: React.RefObject<NavigationContainerRef>, { enabled, prefixes, config, getStateFromPath, }: LinkingOptions): {
    getInitialState: () => Promise<(Partial<Pick<import("@react-navigation/core").NavigationState, "index" | "history">> & {
        stale?: true | undefined;
        type?: string | undefined;
        routes: (Pick<import("@react-navigation/core").Route<string>, "name" | "params"> & {
            key?: string | undefined;
            state?: import("@react-navigation/core").InitialState | undefined;
        })[];
    } & {
        state?: (Partial<Pick<import("@react-navigation/core").NavigationState, "index" | "history">> & {
            stale?: true | undefined;
            type?: string | undefined;
            routes: (Pick<import("@react-navigation/core").Route<string>, "name" | "params"> & {
                key?: string | undefined;
                state?: import("@react-navigation/core").InitialState | undefined;
            })[];
        } & any) | undefined;
    }) | undefined>;
};
