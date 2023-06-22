import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
    <main>
      <ng-content></ng-content>
    </main>
  `,
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {}
