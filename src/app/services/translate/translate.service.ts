import {Inject, Injectable} from '@angular/core';
import {TRANSLATIONS} from './translation';

@Injectable()
export class TranslateService {

  constructor(@Inject(TRANSLATIONS) private _translations: any) {
  }

  private _currentLang: string = localStorage.getItem('lang');

  public get currentLang() {
    return this._currentLang;
  }

  public instant(key: string) {
    // call translation
    return this.translate(key);
  }

  private translate(key: string): string {
    // private perform translation
    let translation = key;

    if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
      return this._translations[this.currentLang][key];
    }

    return translation;
  }
}
