export default {
    BACKEND_SCHEME: 'https',
    BACKEND: 'api.themoviedb.org/3/',
    APPENDIX: '?api_key=',
    API_KEY: 'd66542743750e2b668f7b61e6d47db8b',
    TIMEOUT: 20,
};

export interface configType {
    BACKEND_SCHEME: string;
    BACKEND: string;
    APPENDIX: string;
    API_KEY: string;
    TIMEOUT: number;
}
