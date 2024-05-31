import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null, 
    showNotification: function(notificationData) {}, 
    hideNotification: function() {},
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notificationData){
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler(){
        setActiveNotification(null)
    }

    const context = {
        notification: activeNotification, 
        showNotification: showNotificationHandler, 
        hideNotification: hideNotificationHandler
    }
    return (
        <NotificationContextProvider.Provider value={context}>
            {props.children}
        </NotificationContextProvider.Provider>
    )
}

export default NotificationContext;