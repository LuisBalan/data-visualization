import { Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

export const routes: Routes = [
    {path: '', component: FileUploadComponent},
    {path: 'main', component: MainDashboardComponent}

];
