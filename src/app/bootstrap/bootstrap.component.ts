import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bootstrap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
