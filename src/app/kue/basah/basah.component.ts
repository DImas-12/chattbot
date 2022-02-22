import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basah',
  templateUrl: './basah.component.html',
  styleUrls: ['./basah.component.css'],
})
export class KueBasahComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  Kembali() {
    this.router.navigate(['']);
  }
}
