import * as React from 'react';
import { Route } from '@react-navigation/routers';
/**
 * Context which holds the route prop for a screen.
 */
declare const NavigationContext: React.Context<Route<string> | undefined>;
export default NavigationContext;
