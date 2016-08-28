import { Component, Input } from '@angular/core';

@Component({
  selector: 'FarmersMarketDetail',
  templateUrl: './farmers-market.template.html'
})
export class FarmersMarketComponent {
  @Input() farmer:any;

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
