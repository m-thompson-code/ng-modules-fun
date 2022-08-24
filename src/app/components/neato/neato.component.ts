import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neato',
  templateUrl: './neato.component.html',
  styleUrls: ['./neato.component.scss']
})
export class NeatoComponent {
  @Input() name!: string;
}
