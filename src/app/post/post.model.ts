export class Post {

    /*todo:
        1) Many to many met likes
        2) fotoLink, hoe implementeren?
        3) sortering op basis van datum
    */

    private _id;
    private _fotoLink: string;

    constructor(

        private _titel: string,
        private _omschrijving: string,
        private _datum: Date,
        private _poster: string,
        private _categorie: string
    ) { }

    static fromJson(json: any): Post {
        const post =
            new Post(json.titel, json.omschrijving, json.datum, json.poster, json.categorie);
        post._id = json.id;
        post._fotoLink = json.fotoLink;
        return post;
    }

    toJson(): any {

        return {

            id: this._id,
            cateogire: this._categorie,
            titel: this._titel,
            fotoLink: this._fotoLink,
            omschrijving: this._omschrijving,
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

    get categorie(): string {
        return this._categorie;
    }

    get poster(): string {
        return this._poster;
    }

    get datum(): Date {
        return this._datum;
    }
}

