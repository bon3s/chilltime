import { GenreType } from './GenreType';

export interface DetailsType {
    id: number;
    imdb: string;
    title: string;
    language: string;
    releaseDate: string;
    backdropPath: string;
    posterPath: string;
    voteAvg: number;
    overview: string;
    tagline: string;
    genres: GenreType[];
}
