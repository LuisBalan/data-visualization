import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  MainDashboardComponent,
  ToolbarModule,
  CardModule,
  PanelModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(private router: Router) {};

  title = 'data-visualization';
  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
      } else {
        console.log('Production!');
        }
  }
}
