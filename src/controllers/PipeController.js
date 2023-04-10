import config from '../data/config.json';
import data from '../data/data.json';

export default class PipeController {
    static getPipes() {
        const pipes = data.filter(item => item.type === "pipe");
        return pipes;
    }

    static getFrames() {
        const frames = config.filter(item => item.type === "frame");
        return frames;
    }
}