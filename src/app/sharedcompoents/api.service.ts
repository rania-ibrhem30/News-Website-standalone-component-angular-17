import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getNews(){
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c7308dfe73a44ffb8da2bcd28e646178")
  }
  getHeadlines(category: any) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c7308dfe73a44ffb8da2bcd28e646178`);
  }
  getall(){
    return this.http.get("https://newsapi.org/v2/everything?sources=bbc-news&apiKey=c7308dfe73a44ffb8da2bcd28e646178")
  }

}
