import {Injectable} from '@angular/core';

declare let iziToast: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationPosition = 'topCenter'; // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  constructor() {
  }

  info(message: string) {
    iziToast.info({
      position: this.notificationPosition,
      message
    });
  }

  success(message: any) {
    iziToast.success({
      position: this.notificationPosition,
      message
    });
  }

  error(message: string) {
    iziToast.error({
      position: this.notificationPosition,
      message
    });
  }

  warning(message: any) {
    iziToast.warning({
      position: this.notificationPosition,
      message
    });
  }
}
