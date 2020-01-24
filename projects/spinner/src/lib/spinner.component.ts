import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {
  @Input()
  public isLoading = false;
}
