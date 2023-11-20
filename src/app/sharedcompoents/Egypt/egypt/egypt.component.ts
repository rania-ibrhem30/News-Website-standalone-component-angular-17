import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-egypt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egypt.component.html',
  styleUrl: './egypt.component.scss'
})
export class EgyptComponent {
  constructor(private api:ApiService){
  }
  egypt:any[]=[];
  item: any;
  
  getEg(){
    this.api.getnewsEg().subscribe(
      (res: any) => {
        this.egypt = res.articles;
        console.log(this.egypt)
    ;
      },
      (err) => {
        console.log(err);
      }
    )
    
  }

  handleImageError() {
    this.item.urlToImage = '../../../assets/WhatsApp Image 2023-11-20 at 3.45.55 PM.jpeg'; // Replace with the URL of your placeholder image
  }
  ngOnInit(): void{
    this.getEg()
    
  }


}
