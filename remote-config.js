remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
remoteConfig.defaultConfig = {
    "welcome_message": "Welcome"
  };
const rcDefaultsFile = await fetch('remote_config_defaults.json');

import { FirebaseApp } from "firebase/app";

// Create a FirebaseRemoteConfig object.
let remoteConfig = FirebaseRemoteConfig.sharedInstance()

// Set the default values for your parameters.
remoteConfig.setDefaults([
    "greeting", "Hello, world!",
    "backgroundColor", UIColor.white
])

// Fetch the latest values for your parameters.
remoteConfig.fetch(({ status, error }) => {
    if (status === 'success') {
        // The latest values have been fetched.
        remoteConfig.activate();
    } else {
        // An error occurred while fetching the latest values.
    }
});

// Get the value for the "greeting" parameter.
let greeting = remoteConfig["greeting"].stringValue;

// Use the value for the "greeting" parameter.
print(greeting);
