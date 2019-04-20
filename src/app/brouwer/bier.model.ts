import { Brouwer } from './brouwer.model';

export class Bier {
    constructor(
        private _brouwerId: number,
        private _naam: string,
        private _percentage: number,
        private _kleur: string,
        private _bierSoort: string,
        private _opVat: boolean,
        private _soortGisting: string,
        private _smaak: string,
        private _omschrijving: string,
        private _recent: boolean,
        private _primeur: boolean
    ) { }

    static fromJson(json: any): Bier {
        const bier = new Bier(json.brouwerId, json.naam, json.percentage, json.kleur, json.biersoort, json.opVat, json.soortGisting, json.smaak, json.omschrijving, json.recent, json.primeur);
        return bier;
    }

    toJson(): any {
        return {
            brouwerId: this._brouwerId,
            naam: this._naam,
            percentage: this._percentage,
            kleur: this._kleur,
            bierSoort: this._bierSoort,
            opVat: this._opVat,
            soortGisting: this._soortGisting,
            smaak: this._smaak,
            omschrijving: this._omschrijving,
            recent: this._recent,
            primeur: this._primeur
        };
    }

    get brouwerId(): number {
        return this._brouwerId;
    }

    get naam(): string {
        return this._naam;
    }

    get percentage(): number {
        return this._percentage;
    }

    get kleur(): string {
        return this._kleur
    }

    get bierSoort(): string {
        return this._bierSoort;
    }

    get isOpVat(): boolean {
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

    get isRecent(): boolean {
        return this._recent;
    }

    get isPrimeur(): boolean {
        return this._primeur
    }
}

