import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = false;

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
    }, 2000);
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }
}
