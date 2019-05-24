import { Pipe, PipeTransform } from '@angular/core';
import { Bier } from './bier.model';
import { BierdataService } from './bierdata.service';
import { Brouwer } from './brouwer.model';
import { equalSegments } from '@angular/router/src/url_tree';
import { BrouwerdataService } from './brouwerdata.service';

@Pipe({
  name: 'bierfilter'
})
export class BierfilterPipe implements PipeTransform {

  constructor() { }

  transform(bieren: Bier[], naamBier: string, smaak: string, kleur: string, percentage: number): Bier[] {

    if (!naamBier && !smaak && !kleur && !percentage)
      return bieren;
    if (naamBier)
      bieren = bieren.filter(bier => compare(bier.naam.toLowerCase(), naamBier.toLowerCase()));

    if (smaak)
      bieren = bieren.filter(bier => compare(bier.smaak.toLowerCase(), smaak.toLowerCase()));

    if (kleur)
      bieren = bieren.filter(bier => compare(bier.kleur.toLowerCase(), kleur.toLowerCase()));

    if (percentage)
      bieren = bieren.filter(bier => bier.percentage >= percentage && bier.percentage < (percentage + 1));
    return bieren;
  }
}

function compare(listString: string, filterString: string): boolean {
  let zoekIn = listString;
  let vind = filterString;

  let gevonden;

  if (zoekIn.search(vind) == -1) {
    gevonden = false;
  }
  else
    gevonden = true;
  return gevonden;
}
