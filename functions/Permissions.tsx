import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';

export async function getPushNotificationPermissions() {
  const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }
  console.log(finalStatus);

  console.log("Notification Token: ", await Notifications.getExpoPushTokenAsync());
}
