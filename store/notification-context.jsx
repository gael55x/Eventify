import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null, 
    showNotification: function() {}, 
    hideNotification: function() {},
});

export function NotificationContextProvider(props) {
    return (
        <NotificationContextProvider.Provider>
            {props.children}
        </NotificationContextProvider.Provider>
    )
}

export default NotificationContext;