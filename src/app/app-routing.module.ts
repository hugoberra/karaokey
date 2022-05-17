import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { KaraokeComponent } from './karaoke/karaoke/karaoke.component';
import { CrudplaylistComponent } from './playlist/crudplaylist/crudplaylist.component';
import { InfoplaylistComponent } from './playlist/infoplaylist/infoplaylist.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch: "full"
    
  },
  {
    path:"login", 
    component:LoginComponent
  },
  {
    path:"register", 
    component:RegisterComponent
  },
  {
    path:"karaoke",
    component:KaraokeComponent
  },
  {
    path:"playlist",
    component:CrudplaylistComponent
  },
  {
    path:"myPlaylist",
    component:InfoplaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
