import { NgModule } from "@angular/core";
import { Contador } from './contador/contador.component';



@NgModule({
    declarations: [
        Contador
    ],
    exports: [
        Contador
    ]
})

export class ContadorModule {
    
}