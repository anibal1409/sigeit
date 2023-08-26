import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { TogglePasswordViewComponent } from './toggle-password-view.component';

@Directive({
  selector: '[togglePasswordView]',
})
export class TogglePasswordViewDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactory: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    let hostId = this.elementRef.nativeElement.id;
    if (!hostId) {
      hostId = 'toggle-password-view-host-' + Math.ceil(1000 * Math.random());
      this.elementRef.nativeElement.id = hostId;
    }
    const factory = this.componentFactory.resolveComponentFactory(
      TogglePasswordViewComponent
    );
    const component = this.viewContainerRef.createComponent(factory);
    component.instance.inputHostId = hostId;
  }
}
