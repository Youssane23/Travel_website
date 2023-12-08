import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-location',
  templateUrl: 'location.component.html',
  styleUrls: ['location.component.css'],
})
export class Location {
  @Input()
  Background: string = '/assets/Destinations/destination-1-400h.png'
  @Input()
  Location: string = 'Tokyo, Japan'
  constructor() {}
}
