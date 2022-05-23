import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
