import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'icon-spash-screen',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "SplashScreen": {
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: "large",
      spinnerColor: "#999999"
    }
  }
};

export default config;
