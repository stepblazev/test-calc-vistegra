import config from '../data/config.json';
import data from '../data/data.json';

export default class FixerController {
    static fixerName = data.filter(item => item.type === "fix")[0].name;
    static fixerUnit = data.filter(item => item.type === "fix")[0].unit;
    static fixerPrice = data.filter(item => item.type === "fix")[0].price;

    static getFixerByMaterial(material) {
        const fixer = config.filter(
            item => item.type === "fix" && item.key === material.key
        );
        return { ...fixer[0], price: this.fixerPrice, unit: this.fixerUnit, fixerName: this.fixerName };
    }
}