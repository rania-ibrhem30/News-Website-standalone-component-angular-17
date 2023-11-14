import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  arraynews:any[]=[];
  urlToImage:any
constructor(private api:ApiService){
}
getNews() {
  this.api.getNews().subscribe(
    (res: any) => {
      this.arraynews=res.articles
      console.log(this.arraynews);
    },
    (err) => {
      console.log(err);
    }
  );
}
getCategory(category: string) {
  this.api.getHeadlines(category).subscribe(
    (res: any) => {
      this.arraynews = res.articles;
      this.urlToImage=res.articles.urlToImage
      console.log(this.arraynews);
    },
    (err) => {
      console.log(err);
    }
  );
}
ngOnInit(): void{
  this.getNews()
}

}
