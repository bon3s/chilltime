export class Genre {
    public static fromJSON(maybe: any) {
        if (!maybe) {
            throw new Error('MovieType should be an object');
        }

        if (typeof maybe.id !== 'number') {
            throw new Error('Id should be a number');
        }

        if (typeof maybe.name !== 'string') {
            throw new Error('poster_path should be a number');
        }

        return new Genre(maybe.id, maybe.name);
    }

    public id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
