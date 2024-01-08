import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes =[
    { path:'', redirectTo:'home', pathMatch:'full'},
    { path:'home', component:HomeComponent },
    { path:'about', component:AboutComponent },
    { path:'contacts', component:ContactsComponent},
    { path:'gallery', component:GalleryComponent, children:[
      { path:'', redirectTo:'web', pathMatch:'full'},
      { path:'web', component:WebComponent },
      { path:'mobile', component:MobileComponent },
    ]},
    { path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
