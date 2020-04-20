import { GenreType } from './GenreType';

export interface DetailsType {
    id: number;
    imdb: string | null;
    title: string;
    language: string;
    releaseDate: string;
    backdropPath: string | null;
    posterPath: string | null;
    voteAvg: number;
    overview: string | null;
    tagline: string | null;
    genres: GenreType[];
}
