import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  hardSkills = [
    { name: 'Angular', icon: 'code' },
    { name: 'React', icon: 'code' },
    { name: 'HTML5', icon: 'language' },
    { name: 'CSS3', icon: 'style' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'developer_mode' },
    { name: 'GraphQL', icon: 'data_usage' },
    { name: 'Git', icon: 'merge_type' },
  ];

  softSkills = [
    { name: 'Team Leadership', icon: 'groups' },
    { name: 'Problem Solving', icon: 'psychology' },
    { name: 'Time Management', icon: 'schedule' },
    { name: 'Creativity', icon: 'lightbulb' },
    { name: 'Communication', icon: 'chat' },
    { name: 'Adaptability', icon: 'swap_horiz' },
  ];
}
