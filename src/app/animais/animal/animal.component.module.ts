import { NgModule } from "@angular/core";
import { AnimalComponent } from "./animal.component";

@NgModule({
  declarations: [AnimalComponent],
  exports: [AnimalComponent]
})

export class AnimalModule{}
