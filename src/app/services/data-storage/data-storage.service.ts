import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  searchHistory: any[] = [];

  setHistory(user) {
    this.searchHistory.unshift(user);
    let newArray = [];
              
            let uniqueObject = {};
            for (let i in this.searchHistory) {
                const objName = this.searchHistory[i]['name'];
                uniqueObject[objName] = this.searchHistory[i];
            }
            for (let i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
            this.searchHistory = newArray;
  }

  getHistory() {
    return this.searchHistory;
  }

  clearHistory() {
    this.searchHistory = [];
  }
}
