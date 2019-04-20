import { Pipe, PipeTransform } from '@angular/core';
import { Bier } from './bier.model';

@Pipe({
  name: 'bierfilter'
})
export class BierfilterPipe implements PipeTransform {

  transform(bieren: Bier[], naamBier: string, smaak: string, kleur: string, percentage: number): Bier[] {

    if (!naamBier && !smaak && !kleur && !percentage)
      return bieren;

    bieren = bieren.filter(bier => bier.naam.toLowerCase().startsWith(naamBier));
    bieren = bieren.filter(bier => bier.smaak.toLowerCase().startsWith(smaak));
    bieren = bieren.filter(bier => bier.kleur.toLowerCase().startsWith(kleur));
    bieren = bieren.filter(bier => bier.percentage === percentage);

    return bieren;
  }

}
