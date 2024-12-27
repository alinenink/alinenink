import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, MatIconModule, TranslateModule],
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  whatsappLink = 'https://wa.me/<SEU_NUMERO>?text=Hi%20Aline%20Nink!';
}
