import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {


    @HostBinding('class.open') dropdownToggle = false;

    @HostListener('click') toggleDropdoen() {
        this.dropdownToggle = !this.dropdownToggle;
    }

}