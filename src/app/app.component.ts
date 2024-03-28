import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainDashboardComponent, ToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-visualization';
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
      } else {
        console.log('Production!');
        }
  }
}
