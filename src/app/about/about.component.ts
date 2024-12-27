import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    imports: [CommonModule, TranslateModule, RouterModule],
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  timeline = [
    {
      title: 'graduation',
      description: 'graduationDescription',
      date: '2014-2016'
    },
    {
      title: 'beginnerExperience',
      description: 'beginnerDescription',
      date: '2018-2019'
    },
    {
      title: 'intermediateExperience',
      description: 'intermediateDescription',
      date: '2019-2020'
    },
    {
      title: 'postgraduateAgile',
      description: 'postgraduateAgileDescription',
      date: '2021-2023'
    },
    {
      title: 'advancedExperience',
      description: 'advancedDescription',
      date: '2020-2022'
    },
    {
      title: 'postgraduateUX',
      description: 'postgraduateUXDescription',
      date: '2023'
    },
    {
      title: 'techLeadExperience',
      description: 'techLeadDescription',
      date: '2022-Present'
    }
  ];
  
}
