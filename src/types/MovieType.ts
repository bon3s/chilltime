export interface MovieType {
    id: number;
    popularity: number;
    title: string;
    language: string;
    posterPath: string | null;
    backdropPath: string | null;
    genres: any[];
    voteAvg: number;
    overview: string;
}
