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
        private _datum: Date,
        private _poster: string,
        private _categorie: string,
        private _fotoLink: string
    ) { }

    static fromJson(json: any): Post {
        const post =
            new Post(json.titel, json.omschrijving, json.datum, json.poster, json.categorie, json.fotoLink);
        post._id = json.id;
        return post;
    }

    toJson(): any {

        return {

            id: this._id,
            titel: this._titel,
            omschrijving: this._omschrijving,
            datum: this._datum,
            poster: this._poster,
            categorie: this._categorie,
            fotoLink: this._fotoLink,
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

    set fotoLink(link: string) {
        this._fotoLink = link;
    }
}

