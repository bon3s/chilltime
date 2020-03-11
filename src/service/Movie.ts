export class Movie {
    public static fromJSON(maybe: any) {
        if (!maybe) {
            throw new Error('MovieType should be an object');
        }

        if (typeof maybe.id !== 'number') {
            throw new Error('id should be a number');
        }

        if (typeof maybe.popularity !== 'number') {
            throw new Error('popularity should be a number');
        }

        if (typeof maybe.poster_path !== 'string') {
            throw new Error('poster_path should be a string');
        }

        if (typeof maybe.backdrop_path !== 'string') {
            maybe.backdrop_path = maybe.poster_path;
        }

        if (!Array.isArray(maybe.genre_ids)) {
            throw new Error('genre_ids should be an array');
        }

        if (typeof maybe.original_language !== 'string') {
            throw new Error('original_language should be a string');
        }

        if (typeof maybe.title !== 'string') {
            throw new Error('title should be a string');
        }

        if (typeof maybe.vote_average !== 'number') {
            throw new Error('vote_average should be a number');
        }

        if (typeof maybe.overview !== 'string') {
            throw new Error('overview should be a string');
        }

        return new Movie(
            maybe.id,
            maybe.popularity,
            maybe.poster_path,
            maybe.backdrop_path,
            maybe.original_language,
            maybe.genre_ids,
            maybe.title,
            maybe.vote_average,
            maybe.overview
        );
    }

    public id: number;
    public popularity: number;
    public posterPath: string;
    public backdropPath: string;
    public language: string;
    public genres: number[];
    public title: string;
    public voteAvg: number;
    public overview: string;

    constructor(
        id: number,
        popularity: number,
        posterPath: string,
        backdropPath: string,
        language: string,
        genres: number[],
        title: string,
        voteAvg: number,
        overview: string
    ) {
        this.id = id;
        this.popularity = popularity;
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
        this.language = language;
        this.genres = genres;
        this.title = title;
        this.voteAvg = voteAvg;
        this.overview = overview;
    }
}
