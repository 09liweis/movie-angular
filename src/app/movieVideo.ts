export class MovieVideo {
    id: number;
    results: Array<{
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: string;
        type: string;
    }>;
}
