import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  language='en';
  constructor(private title: Title, private meta: Meta,private translate: TranslateService) {
   
    this.title.setTitle('Traveler template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Traveler template',
      },
    ])
    
    translate.setDefaultLang(this.language);
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
