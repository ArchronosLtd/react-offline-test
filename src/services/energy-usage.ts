import { resolve } from "url";
import Usage, { IUsage, IEntry } from "../models/Usage";

class EnergyUsgaeSvc {
    // we dont really need a cache, i just added one
    private cache: Array<IEntry> = null;

    // yay for ES6 and promises
    get(): Promise<Array<IEntry>> {
        let response;

        if (this.cache) {
            return Promise.resolve(this.cache);
        }

        return new Promise(async (resolve, reject) => {
            try {
                let json;

                response = await fetch('https://api.carbonintensity.org.uk/generation');

                json = await response.json();

                this.cache = json.data.generationmix.map((item: IUsage) => {
                    return new Usage(item);
                });

                return resolve(this.cache);
            } catch (e) {
                return reject({ error: 'Could not fetch data from 3rd party' });
            }
        })
    }
}

export default new EnergyUsgaeSvc();