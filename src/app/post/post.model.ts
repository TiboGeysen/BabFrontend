export class Post {

    /*todo:
        1) Many to many met likes
        2) fotoLink, hoe implementeren?
        3) sortering op basis van datum
    */

    private _id;

    constructor(

        private _titel: string,
        private _omschrijving: string,
        private _fotoLink: string,
        private _datum: Date,
        private _poster: string,
    ) { }

    static fromJson(json: any): Post {
        const post =
            new Post(json.titel, json.omschrijving, json.fotoLink, json.datum, json.poster);
        post._id = json.id;
        return post;
    }

    toJson(): any {

        return {

            id: this._id,
            titel: this._titel,
            omschrijving: this._omschrijving,
            fotoLink: this._fotoLink,
            datum: this._datum,
            poster: this._poster
        };
    }

    get titel(): string {
        return this._titel;
    }

    get fotoLink(): string {
        return this._fotoLink;
    }

    get omschrijving(): string {
        return this._omschrijving;
    }

    get poster(): string {
        return this._poster;
    }

    get datum(): Date {
        return this._datum;
    }
}

