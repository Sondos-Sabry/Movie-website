import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { MoviesService } from '../movies.service';
import { Movie } from '../Interfaces/movie';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],  
  providers:[UsersService]
})

export class GalleryComponent {
galleryFriends:string[] = [];
trendingMovies:Movie[] = [];
posterPrefix:string = 'https//image.tmdb.org/t/p/w500/';

  constructor(_UserServise: UsersService , _MovieServices:MoviesService)
  {
    _MovieServices.getTrending().subscribe((data) => {
       this.trendingMovies = data.results;
   
       
    })

     
      
  }
}
