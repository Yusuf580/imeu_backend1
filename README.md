I encountered this error "Blocked request. This host ("imeu-webapi.omni.co.ug") is not allowed.
To allow this host, add "imeu-webapi.omni.co.ug" to `server.allowedHosts` in vite.config.js." while deploying strapy the in deployment environment.The browser would show that error and the way i went about it was to edit the config file in scr/admin to import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: ['imeu-webapi.omni.co.ug'],
    },
  });
};
Optional: Add the backend URL to the .env file and also make sure that file exists
so that i would have allowed hosts.This to help the url to be concatenated with the strappy backend

Another error i faced was trying to build files from the server, yet it had insufficient RAM.So what i did was build it locally then using scp on my machine to send to the server.It finally run
