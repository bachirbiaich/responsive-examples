import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-css-flexbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './css-flexbox.component.html',
  styleUrls: ['./css-flexbox.component.scss']
})
export class CssFlexboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
