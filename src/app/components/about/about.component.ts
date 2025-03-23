import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: '../../app.component.css',
  standalone: false
})
export class AboutComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('es');
  }
}
