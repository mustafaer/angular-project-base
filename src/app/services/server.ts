import {environment} from '../../environments/environment';

let serverAddress: string;
serverAddress = environment.baseURL;

export const server = {
  login: serverAddress + '/login',
  passwordRequest: serverAddress + '/login/passwordRequest',
  passwordReset: serverAddress + '/login/passwordReset',
  sessionClose: serverAddress + '/login/sessionClose',
};
