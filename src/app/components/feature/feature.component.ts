import { Component, Input } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css'],
})
export class Feature {
  @Input()
  Description: string =''
  @Input()
  Icon: string = '/assets/Icons/thumbs-up.svg'
  @Input()
  Header: any = 'Hand Picked Guides'
  constructor(private translate: TranslateService) {}
}
