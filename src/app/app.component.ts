import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-visualization';
}
