import { Component, Inject, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NamesService } from '../services/names/names.service';

export interface DynamicComponent {
  name: string;
}

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent {
  @ViewChild('container', {read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(
    private readonly namesService: NamesService,
    @Inject('cool') private readonly componentClass: Type<DynamicComponent>,
  ) {}

  ngOnInit(): void {
    const names = this.namesService.getNames(15);

    names.forEach(name => this.loadComponent(name));
  }

  loadComponent(name: string) {
    const componentRef = this.container.createComponent<DynamicComponent>(this.componentClass);
    
    componentRef.instance.name = name;
  }
}
