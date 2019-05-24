import { Bier } from './bier.model';

export class Favoriet {



    constructor(
        private _brouwerId: number,
        private _bierId: number,

    ) { }

    static fromJson(json: any): Favoriet {
        const favoriet = new Favoriet(json.brouwerId, json.bierId);
        return favoriet;
    }

    toJson(): any {
        return {
            brouwerId: this._brouwerId,
            bierId: this._bierId
        };
    }


}