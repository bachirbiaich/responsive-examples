import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-css-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './css-grid.component.html',
  styleUrls: ['./css-grid.component.scss']
})
export class CssGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
