import { Pipe, PipeTransform } from '@angular/core';
import { Bier } from './bier.model';
import { BierdataService } from './bierdata.service';
import { Brouwer } from './brouwer.model';

@Pipe({
  name: 'bierfilter'
})
export class BierfilterPipe implements PipeTransform {

  constructor(private _service: BierdataService) { }

  transform(bieren: Bier[], naamBier: string, smaak: string, kleur: string, percentage: number, naamBrouwer: string): Bier[] {

    if (!naamBier && !smaak && !kleur && !percentage && !naamBrouwer)
      return bieren;
    if (naamBier)
      bieren = bieren.filter(bier => bier.naam.toLowerCase().startsWith(naamBier.toLowerCase()));

    if (smaak)
      bieren = bieren.filter(bier => bier.smaak.toLowerCase().startsWith(smaak.toLowerCase()));

    if (kleur)
      bieren = bieren.filter(bier => bier.kleur.toLowerCase().startsWith(kleur.toLowerCase()));

    if (percentage)
      bieren = bieren.filter(bier => bier.percentage === percentage);


    return bieren;
  }
}
