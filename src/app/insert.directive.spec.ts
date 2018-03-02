import { InsertDirective } from './insert.directive';
import { Renderer, ElementRef } from '@angular/core';

xdescribe('InsertDirective', () => {
  it('should create an instance', () => {
    const directive = new InsertDirective(Renderer, ElementRef);
    expect(directive).toBeTruthy();
  });
});
