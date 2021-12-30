import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = "https://api.spaceflightnewsapi.net/v3/articles/"
    return this.http.get(url);
  }

  getDataOne(id: number) {
    let url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    return this.http.get(url);
  }
}
