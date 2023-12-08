import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-offer',
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.css'],
})
export class Offer {
  @Input()
  Image: string = 'f8ae1ece-a597-4603-a6d6-066768a42c4c'
  @Input()
  Guides: string = ''
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  @Input()
  Location: string = 'Crete, Greece'
  constructor() {}
}
