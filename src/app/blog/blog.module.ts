import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { PostBlockComponent } from './post-block/post-block.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService } from './pager.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogPageComponent, ArticleComponent, ArticleCreateComponent, ArticleEditComponent, PostBlockComponent, PaginationComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    BlogPageComponent,
    ArticleComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    PostBlockComponent,
    PaginationComponent
  ],
  providers:[
    PagerService
  ]
})
export class BlogModule { }
