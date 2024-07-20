import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CheckboxOption } from "../components/file-upload/file-upload.component";

@Injectable({
    providedIn: 'root'
})
export class FileService{
    private fileContentSource = new BehaviorSubject<CheckboxOption[]>([]);
    private rowsFromCurrentFile = new BehaviorSubject<any[]>([]);
    currentTableHeaders = this.fileContentSource.asObservable();

    getColumnsNamesFromTable(content: any){
        let rowsAsObjects = [];
        let csvRowsAsStrings = (content as string).split('\r\n');
        console.log('- csv rows - ', csvRowsAsStrings);
        let columnsNamesRow: string[] = csvRowsAsStrings[0].split(',');
        console.log('- columns names row -- ', columnsNamesRow)

        let tableBodyRows = csvRowsAsStrings.slice(1);
        console.log('-- table body rows --', tableBodyRows);

        const rowsAsArray = tableBodyRows.map((row: string) => row.split(','));
        console.log('-- rows as array --', rowsAsArray);

        for (let i = 0; i < rowsAsArray.length ; i++ ) {
            let newObj: any = {};
            let targetRow = rowsAsArray[i].reduce((accum: any, current: any, index: any) => {
                newObj[`${columnsNamesRow[index]}`] = current;
            }, newObj);
            rowsAsObjects.push(targetRow);
        };

        console.log('--- rows as objects --- ', rowsAsObjects);

        const headers: CheckboxOption[] = this.createColumnCategories(columnsNamesRow)
        this.fileContentSource.next(headers);
    };

    createColumnCategories(arg: string[]): CheckboxOption[] {
        let categoriesArray: CheckboxOption[] = [];
        (arg as Array<string>).forEach((title: string) => {
          let category: CheckboxOption = {name: '', label: '', value: ''};
          category.name = title;
          category.label = title;
          category.value = title;
          categoriesArray.push(category);
        });
        return categoriesArray;
      };

      convertCSVToArrayOfStrings(content: any) {
        return (content as string).split('\r\n');
      };

}