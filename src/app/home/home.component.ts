import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  HomeKering() {
    console.log('kue kering');
    this.router.navigate(['/KueKering']);
  }
  HomeBasah() {
    console.log('kue Basah');
    this.router.navigate(['/KueBasah']);
  }
}
