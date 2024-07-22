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
    currentTableRows = this.rowsFromCurrentFile.asObservable();

    ngOnInit(){ };

    getColumnsAndRowsFromTable(content: any){
        let csvRowsAsStrings = (content as string).split('\r\n');
        let columnsNamesRow: string[] = csvRowsAsStrings[0].split(',');
        const headers: CheckboxOption[] = this.createColumnCategories(columnsNamesRow)

        const rowsTableCollection = csvRowsAsStrings.slice(1)
        .map((row: string) => row.split(','))
        .map((row: any) => {
          return this.createObjectsWithTableContent(columnsNamesRow, row)
        });

        this.fileContentSource.next(headers);
        this.rowsFromCurrentFile.next(rowsTableCollection);
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

      createObjectsWithTableContent(columnsNames: any, valuesArray: any){
        let rowObject: any= {};
        for (let i = 0; i < columnsNames.length; i++) {
          let keyName = columnsNames[i];
          rowObject[keyName] = valuesArray[i];
        };
        return rowObject;
      };


}