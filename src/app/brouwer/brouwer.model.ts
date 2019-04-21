import { Bier } from './bier.model';

export class Brouwer {
    constructor(
        private _naam: string,
        private _bieren = new Array<Bier>(),
    ) { }

    static fromJson(json: any): Brouwer {
        const brouwer = new Brouwer(json.naam, json.bieren.map(bier => bier.fromJson));
        return brouwer;
    }

    toJson(): any {
        return {
            naam: this._naam,
            bieren: this._bieren.map(bier => bier.toJson()),
        };
    }

    get naam(): string {
        return this._naam;
    }

    get bieren(): Bier[] {
        return this._bieren;
    }
    addBier(brouwerId: number, naam: string, percentage: number, kleur: string, bierSoort: string, opVat: boolean, soortGisting: string, smaak: string, omschrijving: string, recent: boolean, primeur: boolean) {
        this._bieren.push(new Bier(brouwerId, naam, percentage, kleur, bierSoort, opVat, soortGisting, smaak, omschrijving, recent, primeur));
    }
}