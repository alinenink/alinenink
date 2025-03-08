import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-view-more",
  standalone: true,
  templateUrl: "./view-more.component.html",
  styleUrls: ["./view-more.component.scss"],
  imports: [CommonModule, TranslateModule],
})
export class ViewMoreComponent implements OnInit {
  selectedProject: any;
  expandedImage: string | null = null;

  projects = [
    {
      id: "1",
      title: "financialDashboard",
      description: [
        "financialDashboardDescriptionP1",
        "financialDashboardDescriptionP2",
        "financialDashboardDescriptionP3",
      ],
      technologies: [
        "Typescript",
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "SCSS",
        "Next.js"
      ],
      images: [
        "assets/dashboard2.png",
        "assets/dashboard3.png",
        "assets/dashboard4.png",
        "assets/dashboard6.png",
        "assets/dashboard7.png",
      ],
      currentImageIndex: 0,
      link: "https://alinenink.github.io/dashboardfinancas"

    },
    {
      id: "2",
      description: [
        "recipeManagerDescription1",
        "recipeManagerDescription2",
        "recipeManagerDescription3",
      ],
      title: "recipeManager",
      images: [
        "assets/myrecipes1.png",
        "assets/myrecipes6.png",
        "assets/myrecipes5.png",
        "assets/myrecipes2.png",
        "assets/myrecipes3.png",
        "assets/myrecipes4.png",
        "assets/myrecipes7.png",
        "assets/myrecipes8.png",
        "assets/myrecipes9.png",
        "assets/myrecipes10.png",
        "assets/myrecipes11.png",
        "assets/myrecipes12.png",
      ],
      currentImageIndex: 0,
      technologies: [
        "Typescript",
        "Angular",
        "SCSS",
        "Tailwind CSS",
        "Node.js",
      ],
      link: "https://alinenink.github.io/myrecipes/"
    },
    {
      id: "3",
      description: [
        "financeDescription1",
        "financeDescription2",
        "financeDescription3",
      ],
      title: "financeTitle",
      images: [
        "assets/auto1.png",
        "assets/auto2.png",
        "assets/auto3.png",
        "assets/auto4.png",
        "assets/auto5.png",
        "assets/auto6.png",
        "assets/auto7.png"
      ],
      currentImageIndex: 0,
      technologies: [
        "Typescript",
        "Angular",
        "SCSS",
        "Tailwind CSS",
      ],
      link: "https://alinenink.github.io/financiamento-auto"
    },
    {
      id: "4",
      title: "plannerTitle",
      description: [
        "plannerDescription1",
        "plannerDescription2",
        "plannerDescription3",
      ],
      technologies: [
        "Typescript",
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "SCSS"
      ],
      images: [
        "assets/planner1.png",
        "assets/planner2.png",
        "assets/planner3.png",
        "assets/planner4.png",
        "assets/planner5.png",
        "assets/planner6.png",
        "assets/planner7.png",
        "assets/planner8.png",
        "assets/planner9.png",
        "assets/planner10.png",
        "assets/planner11.png",
        "assets/planner12.png"
      ],
      currentImageIndex: 0,
      link: "https://alinenink.github.io/planner-system/"
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get("id");
    this.selectedProject = this.projects.find(
      (p) => p.id.toString() === projectId
    );
    this.startImageRotation();
  }

  selectImage(index: number) {
    this.selectedProject.currentImageIndex = index;
  }

  startImageRotation() {
    setInterval(() => {
      if (this.selectedProject && this.selectedProject.images) {
        this.selectedProject.currentImageIndex =
          (this.selectedProject.currentImageIndex + 1) %
          this.selectedProject.images.length;
      }
    }, 3000);
  }

  openProject(link: string) {
    window.open(this.selectedProject.link, link);
  }

  getTechIcon(tech: string): string {
    const icons: { [key: string]: string } = {
      Angular: "assets/angular.svg",
      Typescript: "assets/typescript.svg",
      "React.js": "assets/react.svg",
      "Redux Toolkit": "assets/redux.svg",
      SCSS: "assets/scss.svg",
      "Tailwind CSS": "assets/tailwind.svg",
      "Node.js": "assets/node.svg",
      "Next.js": "assets/nextjs.svg"
    };
    return icons[tech] || "fas fa-code";
  }

  openScreenshot(image: string) {
    this.expandedImage = image;
  }

  closeScreenshot() {
    this.expandedImage = null;
  }

  goBack() {
    window.history.back();
  }
}
