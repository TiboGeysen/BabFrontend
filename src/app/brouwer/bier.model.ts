import { Brouwer } from './brouwer.model';

export class Bier {

    private _id;

    constructor(
        private _naam: string,
        private _percentage: number,
        private _kleur: string,
        private _biersoort: string,
        private _opVat: boolean,
        private _soortGisting: string,
        private _smaak: string,
        private _omschrijving: string,
        private _recent: boolean,
        private _primeur: boolean,
        private _brouwerId?: number,
        private _brouwerNaam?: string,
        private _rating?: number
    ) { }

    static fromJson(json: any): Bier {
        const bier =
            new Bier(json.naam, json.percentage, json.kleur, json.biersoort, json.opVat, json.soortGisting, json.smaak, json.omschrijving, json.recent, json.primeur, json.brouwerId, json.brouwernaam, json.rating);
        bier._id = json.id;
        return bier;
    }

    toJson(): any {
        return {
            id: this._id,
            brouwerId: this._brouwerId,
            brouwernaam: this._brouwerNaam,
            naam: this._naam,
            percentage: this._percentage,
            kleur: this._kleur,
            biersoort: this._biersoort,
            opVat: this._opVat,
            soortGisting: this._soortGisting,
            smaak: this._smaak,
            omschrijving: this._omschrijving,
            recent: this._recent,
            primeur: this._primeur,
            rating: this._rating,

        };
    }

    get naam(): string {
        return this._naam;
    }

    get rating(): number {
        return this._rating;
    }

    get id(): number {
        return this._id;
    }


    get percentage(): number {
        return this._percentage;
    }

    get brouwerNaam(): string {
        return this._brouwerNaam;
    }

    get kleur(): string {
        return this._kleur
    }

    get biersoort(): string {
        return this._biersoort;
    }

    get isOpVat(): string {
        if (this._opVat === true)
            return "Op vat";
        else
            return "Niet op vat";
    }

    get opVat(): boolean {
        return this._opVat;
    }

    get soortGisting(): string {
        return this._soortGisting;
    }

    get smaak(): string {
        return this._smaak;
    }

    get omschrijving(): string {
        return this._omschrijving;
    }

    get isRecent(): string {
        if (this._recent === true)
            return "Recent";
        else
            return "Niet recent";
    }

    get recent(): boolean {
        return this._recent;
    }

    get isPrimeur(): string {
        if (this._primeur === true)
            return "Primeur";
        else
            return "Geen primeur";
    }

    get brouwerId(): number {
        return this._brouwerId;
    }

    get primeur(): boolean {
        return this._primeur;
    }

    set id(id: number) {
        this._id = id;
    }

    set brouwerNaam(naam: string) {
        this._brouwerNaam = naam;
    }

    set brouwerId(id: number) {
        this._brouwerId = id;
    }

    set rating(rating: number){
        this._rating = rating;
    }

    set naam(naam: string) {
        this._naam = naam;
    }
    set percentage(pct: number) {
        this._percentage = pct;
    }

    set kleur(kleur: string) {
        this._kleur = kleur;
    }

    set biersoort(biersoort: string) {
        this._biersoort = biersoort;
    }

    set opVat(opvat: boolean) {
        this._opVat = opvat;
    }

    set soortGisting(soort: string) {
        this._soortGisting = soort;
    }

    set smaak(smaak: string) {
        this._smaak = smaak;
    }

    set omschrijving(omschrijving: string) {
        this._omschrijving = omschrijving;
    }

    set recent(recent: boolean) {
        this._recent = recent;
    }

    set primeur(primeur: boolean) {
        this._primeur = primeur;
    }
}

