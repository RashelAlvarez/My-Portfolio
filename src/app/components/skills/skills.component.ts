import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['../../app.component.css', './skills.component.css']
})
export class SkillsComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('es');
  }

}
