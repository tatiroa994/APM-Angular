import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent implements OnInit {
  public pageTitle = 'Page not found';
  constructor() { }

  ngOnInit(): void {
  }

}
