import { EventEmitter, EventConsumer } from './types';
export declare type NavigationEventEmitter = EventEmitter<Record<string, any>> & {
    create: (target: string) => EventConsumer<Record<string, any>>;
};
/**
 * Hook to manage the event system used by the navigator to notify screens of various events.
 */
export default function useEventEmitter(listen?: (e: any) => void): NavigationEventEmitter;
