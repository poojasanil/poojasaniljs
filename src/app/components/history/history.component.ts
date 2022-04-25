import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public dataStorageService: DataStorageService,
    public router: Router) { }
  searchHistory = [];
  ngOnInit(): void {
    this.searchHistory = this.dataStorageService.getHistory();
  }

  clearHistory() {
    this.dataStorageService.clearHistory();
    this.searchHistory = [];
  }

  goToSearch(user) {
    console.log("here 1")
    // this.dataStorageService.searchForUser(user);
    this.router.navigate(['search'],  { state: { userName: user } }  );    
  }

}
