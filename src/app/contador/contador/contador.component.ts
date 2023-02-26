import { Component } from "@angular/core";

@Component({
    selector:"app-contador",
    templateUrl: "contador.component.html"
})
export class Contador{
    base: number = 5;
    valor: number = 0;

    agrupar(num: number){
        this.valor += num;
    }
}