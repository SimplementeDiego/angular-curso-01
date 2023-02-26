import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
}

function sumaDecimalDosNumeros(pNumero: number, sNumero: number): number {
  const multiplicador: number = Math.pow(
    10,
    Math.max(
      pNumero.toString().split('.')[1]?.length || 0,
      sNumero.toString().split('.')[1]?.length || 0
    )
  );
  return (pNumero * multiplicador + sNumero * multiplicador) / multiplicador;
}

function sumaDecimal(...args: number[]): number {
  let res: number = 0;
  if (args.length > 0) {
    let arrDecimales: number[] = [];
    args.forEach((element) => {
      const decimales = element.toString().split('.')[1]?.length || 0;
      arrDecimales.push(decimales);
    });
    const multiplicador = Math.pow(10, Math.max(...arrDecimales));
    args.forEach((element) => {
      res += element * multiplicador;
    });
    res = res / multiplicador;
  }
  return res;
}
