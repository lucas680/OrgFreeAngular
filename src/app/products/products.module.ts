import { ProductRoutingModule } from './products-routing.module';
import { ProductComponent } from './products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoModule } from "../componentes/cartao/cartao.module";
import { AnimalModule } from '../animais/animal/animal.component.module';

@NgModule({
    declarations: [
        ProductComponent
    ],
    exports: [
        ProductComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        CartaoModule,
        AnimalModule
    ]
})
export class ProductModule { }
