import { SingleData } from "../interfaces";

export class PrepareDataForChart {

    private receivedData!: any;

    constructor(private data: any) {
        this.receivedData = data;
    }

    generatePieChartData(): SingleData {
        const result: SingleData = {};
        for(const category in this.receivedData) {
            let initialValue = 0;
            this.receivedData[category].forEach((element: any) => {
                initialValue += element["MONTO"];
            });
            result[category] = initialValue;
        }
        return result;
    }



}