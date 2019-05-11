import { Bier } from './bier.model';

export class Brouwer {

    private _id;

    constructor(
        private _naam: string,
        private _bieren = new Array<Bier>(),
        private _stand: number,

    ) { }

    static fromJson(json: any): Brouwer {
        const brouwer = new Brouwer(json.naam, json.bieren.map(bier => bier.fromJson), json.stand);
        brouwer._id = json.id;
        return brouwer;
    }

    toJson(): any {
        return {
            id: this._id,
            naam: this._naam,
            bieren: this._bieren.map(bier => bier.toJson()),
            stand: this._stand
        };
    }

    get naam(): string {
        return this._naam;
    }

    get id(): number {
        return this._id;
    }

    get bieren(): Bier[] {
        return this._bieren;
    }
    addBier(brouwerId: number, naam: string, percentage: number, kleur: string, bierSoort: string, opVat: boolean, soortGisting: string, smaak: string, omschrijving: string, recent: boolean, primeur: boolean) {
        this._bieren.push(new Bier(brouwerId, naam, percentage, kleur, bierSoort, opVat, soortGisting, smaak, omschrijving, recent, primeur));
    }
}