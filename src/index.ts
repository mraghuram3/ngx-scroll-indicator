import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgScrollComponent } from './ng-scroll.component';
import { NgScrollDirective } from './ng-scroll.directive';
import { NgScrollService } from './ng-scroll.service';

export * from './ng-scroll.component';
export * from './ng-scroll.directive';
export * from './ng-scroll.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgScrollComponent,
    NgScrollDirective
  ],
  exports: [
    NgScrollComponent,
    NgScrollDirective
  ]
})
export class NgScrollIndicatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgScrollIndicatorModule,
      providers: [NgScrollService]
    };
  }
}
