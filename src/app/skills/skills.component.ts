import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-skills",
  imports: [
    CommonModule, // Necessário para *ngFor, *ngIf, etc.
    MatIconModule, // Ícones do Angular Material
    RouterModule, // Para roteamento, se necessário
    TranslateModule, // Para tradução (caso você use ngx-translate)
  ],
  standalone: true,
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit, AfterViewInit {

  hardSkills = [
    // Languages
    {
      name: "html",
      level: 100,
      animatedLevel: 100,
      icon: "fa-brands fa-html5",
      category: "Language",
      translate: { en: "HTML", pt: "HTML" },
    },
    {
      name: "javascript",
      level: 95,
      animatedLevel: 95,
      icon: "fa-brands fa-js",
      category: "Language",
      translate: { en: "JavaScript", pt: "JavaScript" },
    },
    {
      name: "typescript",
      level: 95,
      animatedLevel: 95,
      icon: "fa-brands fa-js",
      category: "Language",
      translate: { en: "TypeScript", pt: "TypeScript" },
    },

    // Frameworks
    {
      name: "angular",
      level: 100,
      animatedLevel: 100,
      icon: "fa-brands fa-angular",
      category: "Framework",
      translate: {
        en: "Angular (up to version 18)",
        pt: "Angular (até versão 18)",
      },
    },
    {
      name: "angularJs",
      level: 100,
      animatedLevel: 100,
      icon: "fa-brands fa-angular",
      category: "Framework",
      translate: { en: "Angular JS", pt: "Angular JS" },
    },
    {
      name: "css",
      level: 100,
      animatedLevel: 100,
      icon: "fa-brands fa-css3-alt",
      category: "Framework",
      translate: {
        en: "CSS (UX, CSS3, LESS, SASS, Bootstrap)",
        pt: "CSS (UX, CSS3, LESS, SASS, Bootstrap)",
      },
    },
    {
      name: "ngrx",
      level: 95,
      animatedLevel: 95,
      icon: "fa-solid fa-database",
      category: "Framework",
      translate: { en: "NgRx", pt: "NgRx" },
    },

    // Methodologies
    {
      name: "methodologies",
      level: 75,
      animatedLevel: 75,
      icon: "fa-solid fa-chart-line",
      category: "Methodology",
      translate: { en: "Agile Methodologies", pt: "Metodologias Ágeis" },
    },

    // Testing
    {
      name: "testing",
      level: 95,
      animatedLevel: 95,
      icon: "fa-solid fa-vials",
      category: "Testing",
      translate: {
        en: "Jasmine, Jest, and Karma (Unit Testing)",
        pt: "Jasmine, Jest e Karma (Testes Unitários)",
      },
    },

    // Tools
    {
      name: "git",
      level: 95,
      animatedLevel: 95,
      icon: "fa-brands fa-git-alt",
      category: "Tools",
      translate: { en: "Git", pt: "Git" },
    },
    {
      name: "jenkins",
      level: 75,
      animatedLevel: 75,
      icon: "fa-solid fa-toolbox",
      category: "Tools",
      translate: { en: "Jenkins (CI/CD)", pt: "Jenkins (CI/CD)" },
    },

    // Architecture
    {
      name: "microFrontend",
      level: 85,
      animatedLevel: 85,
      icon: "fa-solid fa-diagram-project",
      category: "Architecture",
      translate: {
        en: "Micro-frontend Architecture",
        pt: "Arquitetura Micro-frontend",
      },
    },

    // Cloud
    {
      name: "azure",
      level: 80,
      animatedLevel: 80,
      icon: "fa-solid fa-cloud",
      category: "Cloud",
      translate: { en: "Azure", pt: "Azure" },
    },
    {
      name: "kubernetes",
      level: 75,
      animatedLevel: 75,
      icon: "fa-solid fa-cubes",
      category: "Cloud",
      translate: { en: "Kubernetes", pt: "Kubernetes" },
    },

    // Miscellaneous
    {
      name: "apiIntegration",
      level: 100,
      animatedLevel: 100,
      icon: "fa-solid fa-arrows-spin",
      category: "Miscellaneous",
      translate: {
        en: "API REST and GraphQL Integrations",
        pt: "Integrações API REST e GraphQL",
      },
    },
    {
      name: "english",
      level: 80,
      animatedLevel: 80,
      icon: "fa-solid fa-language",
      category: "Miscellaneous",
      translate: { en: "English", pt: "Inglês" },
    },
  ];

  softSkills = [
    {
      name: "react",
      icon: "fa-brands fa-react",
      category: "Framework",
    },
    {
      name: "nextjs",
      icon: "fa-solid fa-terminal",
      category: "Framework",
    },
    {
      name: "tailwind",
      icon: "fa-brands fa-css3-alt",
      category: "Framework",
    },
    {
      name: "sql",
      icon: "fa-solid fa-database",
      category: "Database",
    },
    {
      name: "nodejs",
      icon: "fa-brands fa-node-js",
      category: "Backend",
    },
    {
      name: "java",
      icon: "fa-brands fa-java",
      category: "Backend",
    },
    {
      name: "aws",
      icon: "fa-brands fa-aws",
      category: "Cloud",
    },
    {
      name: "vuejs",
      icon: "fa-brands fa-vuejs",
      category: "Framework",
    },
  ];

  ngOnInit(): void {
    this.hardSkills.forEach((skill) => {
      skill.animatedLevel = 0;
    });
  }

  ngAfterViewInit(): void {
    // Inicialize a animação com 0 e atualize o nível após o atraso
    this.hardSkills.forEach((skill) => {
      skill.animatedLevel = 0;
    });

    setTimeout(() => {
      this.hardSkills.forEach((skill) => {
        skill.animatedLevel = skill.level; // Atualiza para o valor desejado
      });
    }, 300); // Ajuste o atraso para sincronizar com o DOM
  }

  getProgressBarId(skillName: string): string {
    return "progress-" + skillName.replace(/\s+/g, "-").toLowerCase();
  }
}
