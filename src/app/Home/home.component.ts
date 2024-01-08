import { Component } from '@angular/core';
import { User } from '../user';
import { MoviesService } from '../movies.service';
import { Movie } from '../Interfaces/movie';
import { Observable } from 'rxjs';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
 
  userName:string ='Sondos Hammad'; 
  trendingMovies:Movie []=[];
  errMessage:string = ''; 
  posterPrefix:string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _MovieServices:MoviesService)
  {
      _MovieServices.getTrending().subscribe({
        next: (data)=> this.trendingMovies = data.results,
        error: (err)=> this.errMessage = err,
        complete:()=> console.log('Complete')//كده كده هتشتغل سواء مع الايرور او next  
      })
  } 
 

  title = 'app2';
  users:User[] = []
  user:User = {id:10, fullName:'sondos sabry hammad' , age:22, salary:40000 , gender:'female'};
  friends:string[] = ['sondos', 'sara','shemo', 'ali' ]
  userAge:number = 22;
  imgSrc:string ='./assets/images/image1.jpg'
  imgWidth:number = 200;
  productPrice:number = 3000;
  onSale:boolean = false; //display:none; 

  Welcome()
  {
    window.alert('Welcome Ya User :)')
  }

}