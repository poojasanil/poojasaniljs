import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { url } from 'src/app/general/api';
import { ApiService } from 'src/app/services/api.service';
import { DataStorageService } from 'src/app/services/data-storage/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public service: ApiService,public dataStorageService: DataStorageService, private router: Router,
    private location:Location) { }

  username = "";
  userDetails;

  ngOnInit(): void {

    console.log(this.router.getCurrentNavigation()?.extras?.state?.name);
    let stateVal;
    stateVal = this.location.getState();
    console.log(stateVal);
if(stateVal && stateVal.userName) {
  this.username = stateVal.userName
  this.search()
}
    // this.dataStorageService.searchUsername.subscribe(user => {

    //   if(user){
    //     console.log("user in init ", user)
    //     this.username = user;
    //     this.search();
    //   }
    //   }
    //   );
  }

  search() {
    console.log("in search")

    // this.dataStorageService.searchForUser("");
    this.service.getRequest(url.search, this.username).subscribe(
      data => {
        console.log("user", data);
        this.userDetails = data;
        this.dataStorageService.setHistory({name: this.username, color: "green"});
      }, error => {
        alert("Data not available for "+ this.username);
        this.dataStorageService.setHistory({name: this.username, color: "red"});
      }
    )
  }

}
