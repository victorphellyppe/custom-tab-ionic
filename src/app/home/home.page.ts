import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ionViewDidEnter() {
    const tabButton = document.querySelector('#tab-button-tab3');

    if (tabButton && tabButton.shadowRoot) {
      const buttonNative = tabButton.shadowRoot.querySelector('.button-native');

      if (buttonNative) {
        buttonNative.setAttribute('style', 'margin-top: -2px');
      }
    }
  }

}
