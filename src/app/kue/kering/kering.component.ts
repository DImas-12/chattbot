import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kering',
  templateUrl: './kering.component.html',
  styleUrls: ['./kering.component.css'],
})
export class KueKeringComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
