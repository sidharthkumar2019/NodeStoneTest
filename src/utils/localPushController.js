import PushNotification from "react-native-push-notification";

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },
  
  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

PushNotification.createChannel(
    {
        channelId: 'channel-id',
        channelName: 'local notifications',
        channelDescription: 'A channel for local notifications.',
        playSound: true,
        soundName: 'default',
        vibrate: true,
        vibration: 1000,
    },
    (created) => console.log(`channel created ${created}`)  
);

export const LocatNotification = ({title, message}) => {
    PushNotification.localNotification({
        channelId: 'channel-id',
        channelName: 'local notifications',
        autoCancel: true,
        bigText: 'This is a local push notification',
        title: title,
        message: message,
        channelDescription: 'A channel for local notifications.',
        playSound: true,
        soundName: 'default',
        vibrate: true,
        vibration: 1000,
    })
}