import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page={
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'https://cdn.jsdelivr.net/gh/AHaaland/angular-t25whv@master/src/app/page/Assets/191c7063838dff3add0caffcff6284ce.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}