import config from '../data/config.json';
import data from '../data/data.json';

export default class ListController {
    static getAllLists() {
        const lists = data.filter(item => item.type === "list");
        return lists;
    }

    static getListsByMaterial(material = this.getMaterials()[0]) {
        const materials = data.filter(
            item => item.type === "list" && item.material === material?.key
        );
        return materials;
    }

    static getMaterials() {
        const materials = config.filter(item => item.type === "material");
        return materials;
    }
}