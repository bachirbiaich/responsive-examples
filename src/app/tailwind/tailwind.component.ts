import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tailwind',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tailwind.component.html',
  styleUrls: ['./tailwind.component.scss']
})
export class TailwindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
