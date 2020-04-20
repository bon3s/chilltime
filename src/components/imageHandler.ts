export const imageHandler = (
    posterPath: string | null,
    posterSize: number = 500
) => {
    if (posterPath !== null) {
        return 'https://image.tmdb.org/t/p/w' + posterSize + posterPath;
    } else {
        return '';
    }
};
