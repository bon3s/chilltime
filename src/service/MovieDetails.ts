export class MovieDetails {
    public static fromJSON(maybe: any) {
        if (!maybe) {
            throw new Error('MovieDetails should be an object');
        }

        if (typeof maybe.id !== 'number') {
            throw new Error('id should be a number');
        }

        if (typeof maybe.imdb_id !== 'string') {
            throw new Error('imdb_id should be a string');
        }

        if (typeof maybe.title !== 'string') {
            throw new Error('title should be a string');
        }

        if (typeof maybe.original_language !== 'string') {
            throw new Error('original_language should be a string');
        }

        if (typeof maybe.release_date !== 'string') {
            throw new Error('release_date should be a string');
        }

        if (typeof maybe.backdrop_path !== 'string') {
            throw new Error('backdrop_path should be a string');
        }

        if (typeof maybe.poster_path !== 'string') {
            throw new Error('backdrop_path should be a string');
        }

        if (typeof maybe.overview !== 'string') {
            throw new Error('overview should be a string');
        }

        if (typeof maybe.vote_average !== 'number') {
            throw new Error('vote_number should be a number');
        }

        if (typeof maybe.tagline !== 'string') {
            throw new Error('tagline should be a string');
        }

        if (!Array.isArray(maybe.genres)) {
            throw new Error('genre_ids should be an array');
        }

        return new MovieDetails(
            maybe.id,
            maybe.imdb_id,
            maybe.title,
            maybe.original_language,
            maybe.release_date,
            maybe.backdrop_path,
            maybe.poster_path,
            maybe.vote_average,
            maybe.overview,
            maybe.tagline,
            maybe.genres
        );
    }

    public id: number;
    public imdb: string;
    public title: string;
    public language: string;
    public releaseDate: string;
    public backdropPath: string;
    public posterPath: string;
    public voteAvg: number;
    public overview: string;
    public tagline: string;
    public genres: number[];

    constructor(
        id: number,
        imdb: string,
        title: string,
        language: string,
        releaseDate: string,
        backdropPath: string,
        posterPath: string,
        voteAvg: number,
        overview: string,
        tagline: string,
        genres: number[]
    ) {
        this.id = id;
        this.imdb = imdb;
        this.title = title;
        this.language = language;
        this.releaseDate = releaseDate;
        this.backdropPath = backdropPath;
        this.posterPath = posterPath;
        this.voteAvg = voteAvg;
        this.overview = overview;
        this.tagline = tagline;
        this.genres = genres;
    }
}
