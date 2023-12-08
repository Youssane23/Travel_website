
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teleport-project-template-angular';
  language='fr';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  changeLanguage(){
    if(this.language=='en'){
      this.language='fr';
    }else{
      this.language='en'
    }
    this.translate.use(this.language);
    
  }
}