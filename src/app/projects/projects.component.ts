import { ChangeDetectorRef, Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { TranslateModule } from "@ngx-translate/core";
import { GoogleAnalyticsService } from "../services/google-analytics.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-projects",
  imports: [CommonModule, MatTabsModule, TranslateModule, RouterModule],
  standalone: true,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProjectsComponent {
  constructor(private googleAnalyticsService: GoogleAnalyticsService, private cdr: ChangeDetectorRef) {
    // Disparo de pageview ao acessar a página
    this.googleAnalyticsService.sendEvent("page_view", {
      page_path: "/projects",
      page_title: "Projects Page",
    });
  }

  projects = [
    {
      id: '1',
      title: 'financialDashboard',
      images: ['assets/dashboard1.png', 'assets/dashboard5.png', 'assets/dashboard3.png'],
      currentImageIndex: 0,
      link: "https://alinenink.github.io/dashboardfinancas"
    },
    {
      id: '2',
      title: "recipeManager",
      images: ['assets/myrecipes1.png', 'assets/myrecipes6.png', 'assets/myrecipes5.png',],
      currentImageIndex: 0,
      link: "https://alinenink.github.io/myrecipes/"
    },
    {
      id: '3',
      title: "financeTitle",
      images: ['assets/auto2.png', 'assets/auto5.png', 'assets/auto4.png',],
      currentImageIndex: 0,
      link: "https://alinenink.github.io/financiamento-auto"
    },
    {
      id: '4',
      title: "plannerTitle",
      images: ['assets/planner1.png', 'assets/planner2.png', 'assets/planner3.png',],
      currentImageIndex: 0,
      link: "https://alinenink.github.io/planner-system/"
    }
  ];
  
  ngOnInit() {
    this.startImageRotation();
  }

  selectImage(project: any, index: number) {
    project.currentImageIndex = index;
  }

  startImageRotation() {
    setInterval(() => {
      this.projects.forEach(project => {
        project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
      });
    }, 3000);
  }

  openLink(url: string): void {
    // Abre o link em uma nova aba
    window.open(url, "_blank");

    // Dispara um evento de clique no link para o Google Analytics
    this.googleAnalyticsService.sendEvent("click_project_link", {
      project_url: url,
      page_path: "/projects",
    });
  }
}
