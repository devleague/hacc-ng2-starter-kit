import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { FarmersMarketComponent } from '../farmers-market';

@Component({
  selector: 'FarmersMarketList',
  styleUrls: [ './farmers-markets.style.css' ],
  templateUrl: './farmers-markets.template.html',
  directives: [FarmersMarketComponent]
})

export class FarmersMarketListComponent {
  localState = { value: '' };
  public farmers:Array<any>;

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    this.farmers = [1,2,3];
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
