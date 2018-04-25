import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }
  
  formateTitle(title: string): string {
      //formate 'now_playing' to 'Noew Playing'
      return title.split('_').map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
  }

}