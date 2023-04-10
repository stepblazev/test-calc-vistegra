export default class CalculatorController {
    static getSquare(length, width) {
        const square = (length * width).toFixed(2);
        console.clear();
        console.group(`Начало вычислений. Площадь: %c${square} м2`, 'color: lightblue; font-size: 16px');
        return square;
    }

    static getAmountOfLists(square, listWidth) {
        const amount = Math.ceil(square / listWidth);
        console.log(`Минимальное кол-во листов: %c${amount} шт.`, 'color: lightblue; font-size: 16px');
        return amount;
    }

    // REVIEW ?
    static getAmountOfPipes(length, width, step, pipeWidth) {
        const amountLength = Math.ceil(length / step);
        const pipeDeviation = pipeWidth * amountLength;
        const Lc = (length / amountLength).toFixed(2);

        const amountWidth = Math.ceil(width / step);
        const Wc = ((width - pipeDeviation) / amountWidth).toFixed(2);
        console.log(`Количество ячеек: %c${amountLength * amountWidth} шт.`, 'color: lightblue; font-size: 16px');
        console.log(`Рассчетный размер ячейки Wc: %c${Lc}м. x ${Wc}м.`, 'color: lightblue; font-size: 16px');

        const amountOfPipes = ((length * (amountWidth + 1)) + ((width - pipeDeviation) * (amountLength + 1))).toFixed(2);
        console.log(`Количество трубы: %c${amountOfPipes} м/п.`, 'color: lightblue; font-size: 16px');

        return { Lc, Wc, amountOfPipes };
    }

    static getAmountOfFixers(square, perM2) {
        const amount = Math.ceil(square * perM2);
        console.log(`Минимальное кол-во саморезов: %c${amount} шт.`, 'color: lightblue; font-size: 16px');
        return amount;
    }
}