import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { url } from 'src/app/general/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigateByUrl('/search');    
  }

  history() {
    this.router.navigateByUrl('/history');    
  }

}
