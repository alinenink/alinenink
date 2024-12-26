import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce platform with Angular and Node.js.',
      link: 'https://github.com/username/ecommerce-platform',
      image: 'assets/projects/ecommerce.jpg',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website showcasing my skills and projects.',
      link: 'https://github.com/username/portfolio',
      image: 'assets/projects/portfolio.jpg',
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app to manage tasks and schedules effectively.',
      link: 'https://github.com/username/task-manager',
      image: 'assets/projects/task-manager.jpg',
    },
  ];
}
