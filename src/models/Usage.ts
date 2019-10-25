export interface IUsage {
    fuel: string;
    perc: number;
}

export interface IEntry {
    id: any;
    value: number;
    label: string;
}

export default class Usage implements IEntry {
    private _fuel: string;
    private _perc: number;

    constructor(raw: IUsage) {
        this._fuel = raw.fuel;
        this._perc = raw.perc;
    }

    get id(): string {
        return this._fuel;
    }

    get value(): number {
        return this._perc;
    }

    get label(): string {
        return this._fuel
    }

    toJSON(): IEntry {
        return {
            id: this.id,
            value: this.value,
            label: this.label
        }
    }
}