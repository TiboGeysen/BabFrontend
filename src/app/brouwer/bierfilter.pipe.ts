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

  transform(bieren: Bier[], naamBier: string, smaak: string, kleur: string, percentage: number, gisting: string, soort: string, id: number): Bier[] {


    if (!naamBier && !smaak && !kleur && !percentage && !gisting && !soort && !id)
      return bieren.sort(sortCompare);
    if (naamBier)
      bieren = bieren.filter(bier => compare(bier.naam.toLowerCase(), naamBier.toLowerCase()));

    if (smaak)
      bieren = bieren.filter(bier => compare(bier.smaak.toLowerCase(), smaak.toLowerCase()));

    if (kleur)
      bieren = bieren.filter(bier => compare(bier.kleur.toLowerCase(), kleur.toLowerCase()));

    if (percentage)
      bieren = bieren.filter(bier => bier.percentage >= percentage && bier.percentage < (percentage + 1));

    if (gisting)
      bieren = bieren.filter(bier => compare(bier.soortGisting.toLowerCase(), gisting.toLowerCase()));

    if (soort)
      bieren = bieren.filter(bier => compare(bier.biersoort.toLowerCase(), soort.toLowerCase()));

    if (id)
      bieren = bieren.filter(bier => compare(bier.brouwerId.toString(), id.toString()));
    return bieren.sort(sortCompare);

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

function sortCompare(a, b) {
  if (a.naam < b.naam) {
    return -1;
  }
  if (a.naam > b.naam) {
    return 1;
  }
  return 0;
}

