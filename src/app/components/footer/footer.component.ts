import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: '../../app.component.css'
})
export class FooterComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('es');
  }
}
