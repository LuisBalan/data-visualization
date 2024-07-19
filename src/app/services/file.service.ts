import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CheckboxOption } from "../components/file-upload/file-upload.component";

@Injectable({
    providedIn: 'root'
})
export class FileService{
    private fileContentSource = new BehaviorSubject<CheckboxOption[]>([]);
    currentFileContent = this.fileContentSource.asObservable();

    getColumnsNamesFromTable(content: any){
        let csvRows = (content as string).split('\r\n');
        let columnsNamesRow: string[] = csvRows[0].split(',');
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
}