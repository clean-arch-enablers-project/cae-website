import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-home',
  imports: [HlmButtonDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { 'class': 'p-10' }
})
export class HomeComponent {

}
