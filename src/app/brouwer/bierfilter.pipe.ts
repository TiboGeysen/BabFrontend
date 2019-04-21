import { Pipe, PipeTransform } from '@angular/core';
import { Bier } from './bier.model';

@Pipe({
  name: 'bierfilter'
})
export class BierfilterPipe implements PipeTransform {

  transform(bieren: Bier[], naamBier: string, smaak: string, kleur: string, percentage: number, naamBrouwer: string): Bier[] {

    if (!naamBier && !smaak && !kleur && !percentage && !naamBrouwer)
      return bieren;
    if (naamBier)
      bieren = bieren.filter(bier => bier.naam.toLowerCase().startsWith(naamBier.toLowerCase()));

    if (smaak)
      bieren = bieren.filter(bier => bier.smaak.toLowerCase().startsWith(smaak.toLowerCase()));

    if (kleur)
      bieren = bieren.filter(bier => bier.kleur.toLowerCase().startsWith(kleur.toLowerCase()));

    //if(naamBrouwer)
    //bieren = bieren.filter(bier => bier.naamBrouwer.toLowerCase().startsWith(naamBrouwer));

    if (percentage)
      bieren = bieren.filter(bier => bier.percentage === percentage);

    return bieren;
  }
}
