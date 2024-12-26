import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule], // Importando o módulo necessário
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  timeline = [
    { title: 'Started as a Developer', description: 'Began my journey in front-end development.', date: '2017' },
    { title: 'First Tech Lead Role', description: 'Led a team of developers for a major project.', date: '2020' },
    { title: 'Mastered Angular', description: 'Gained deep expertise in Angular and modern frameworks.', date: '2022' },
    { title: 'Built Amazing Projects', description: 'Developed multiple personal and professional applications.', date: '2023' },
  ];
}
