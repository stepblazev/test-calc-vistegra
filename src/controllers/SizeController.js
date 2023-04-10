import config from '../data/config.json';

export default class SizeController {
    static getWidth() {
        const width = config.filter(
            item => (item.type === "size") && (item.key === "width")
        );
        return width[0];
    }

    static getLength() {
        const length = config.filter(
            item => (item.type === "size") && (item.key === "length")
        );
        return length[0];
    }
}