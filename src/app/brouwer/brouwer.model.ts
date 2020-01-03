import { Bier } from './bier.model';

export class Brouwer {

    private _id;
    private _email;

    constructor(
        private _naam: string,
        private _bieren = new Array<Bier>(),
        private _stand: number,
        private _soort: string

    ) { }

    static fromJson(json: any): Brouwer {
        const brouwer = new Brouwer(json.naam, json.bieren.map(Bier.fromJson), json.stand, json.soort);
        brouwer._id = json.id;
        brouwer._email = json.email;
        return brouwer;
    }

    toJson(): any {
        return {
            id: this._id,
            naam: this._naam,
            bieren: this._bieren.map(bier => bier.toJson()),
            stand: this._stand,
            email: this._email,
            soort: this._soort
        };
    }

    get naam(): string {
        return this._naam;
    }

    get soort(): string {
        return this._soort;
    }

    get id(): number {
        return this._id;
    }

    get bieren(): Bier[] {
        return this._bieren;
    }


    get stand(): number {
        return this._stand;
    }

    set id(id: number) {
        this._id = id;
    }

    set soort(soort: string) {
        this._soort = soort;
    }

    get mail(): string {
        return this._email;
    }

    set mail(mail: string) {
        this._email = mail;
    }

    set stand(stand: number) {
        this._stand = stand;
    }

    set naam(naam: string) {
        this._naam = naam;
    }

    set bieren(bieren: Bier[]) {
        this._bieren = bieren;
    }

    addBier(naam: string, percentage: number, kleur: string, bierSoort: string, opVat: boolean, opFles: boolean, soortGisting: string, smaak: string, omschrijving: string, recent: boolean, aanwezig: boolean, primeur: boolean, aantalJetons: number) {
        this._bieren.push(new Bier(naam, percentage, kleur, bierSoort, opVat, opFles, soortGisting, smaak, omschrijving, recent, aanwezig, primeur, aantalJetons));
    }
}