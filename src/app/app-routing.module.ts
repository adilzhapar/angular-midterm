import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'about', component: AboutComponent},
  {path: 'comments', component: CommentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
