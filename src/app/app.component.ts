import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pxValue = 16;
  remValue = 1;
  base = 16;

  public onBaseChange(event: any) {
    this.remValue = this.pxValue / event.target.value;
  }

  public onPXChange(event: any) {
    this.remValue = event.target.value / this.base;

  }
  public onREMChange(event: any) {
    this.pxValue = event.target.value * this.base;
  }
}
