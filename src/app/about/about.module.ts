import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports:[
    AboutComponent
  ],
})
export class AboutModule { }
