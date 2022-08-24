import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-far-out',
  templateUrl: './far-out.component.html',
  styleUrls: ['./far-out.component.scss']
})
export class FarOutComponent {
  @Input() name!: string;
}