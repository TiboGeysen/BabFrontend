import { Brouwer } from './brouwer.model';

export class Bier {

    private _id;

    constructor(
        private _naam: string,
        private _percentage: number,
        private _kleur: string,
        private _biersoort: string,
        private _opVat: boolean,
        private _opFles: boolean,
        private _soortGisting: string,
        private _smaak: string,
        private _omschrijving: string,
        private _recent: boolean,
        private _aanwezig: boolean,
        private _primeur: boolean,
        private _aantalJetons: number,
        private _brouwerId?: number,
        private _brouwerNaam?: string,
        private _rating?: number
    ) { }

    static fromJson(json: any): Bier {
        const bier =
            new Bier(json.naam, json.percentage, json.kleur, json.biersoort, json.opVat, json.opFles, json.soortGisting, json.smaak, json.omschrijving, json.recent, json.aanwezig, json.primeur, json.aantalJetons, json.brouwerId, json.brouwernaam, json.rating);
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
            opFles: this._opFles,
            opVat: this._opVat,
            soortGisting: this._soortGisting,
            smaak: this._smaak,
            omschrijving: this._omschrijving,
            aantalJetons: this._aantalJetons,
            recent: this._recent,
            aanwezig: this._aanwezig,
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

    get isOpFles(): string {
        if (this._opFles === true)
            return "Op fles";
        else
            return "Niet op fles";
    }

    get opVat(): boolean {
        return this._opVat;
    }

    get opFles(): boolean {
        return this._opFles;
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

    get aanwezig(): boolean {
        return this._aanwezig;
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

    get aantalJetons(): number {
        return this._aantalJetons;
    }

    set aantalJetons(aantal: number) {
        this._aantalJetons = aantal;
    }

    set id(id: number) {
        this._id = id;
    }

    set aanwezig(aanwezig: boolean) {
        this._aanwezig = aanwezig;
    }

    set brouwerNaam(naam: string) {
        this._brouwerNaam = naam;
    }

    set brouwerId(id: number) {
        this._brouwerId = id;
    }

    set rating(rating: number) {
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

    set opFles(opfles: boolean) {
        this._opFles = opfles;
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

