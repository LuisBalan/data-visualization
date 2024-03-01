export interface LineChartData {
    labels: string[];
    datasets: LineDataSet[];
}

export interface LineDataSet {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number
}

export interface PieChartData {
    labels: string[];
    datasets: PieDataSet[];
}

export interface PieDataSet {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
}

export interface SingleData {[label: string]: number}
