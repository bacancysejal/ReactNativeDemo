/**
 * @providesModule ReduxActions
 */

export const LOADER_SET = 'loader/SET';
export const NOTIFICATION_PUSH = 'notification/PUSH';
export const NOTIFICATION_POP = 'notification/POP';

// action creators

export const loaderSet = state => ({
    type: LOADER_SET,
    state
});

export const notificationPush = text => ({
    type: NOTIFICATION_PUSH,
    text
});

export const notificationPop = () => ({
    type: NOTIFICATION_POP
});
