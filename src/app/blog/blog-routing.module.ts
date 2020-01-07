import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleCreateComponent } from './article-create/article-create.component';



const routes: Routes = [
  {path:'',component:BlogPageComponent},
  {path:'Article/:id',component:ArticleComponent},
  {path:'Article-edit/:id',component:ArticleEditComponent},
  {path:'Article-create',component:ArticleCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
