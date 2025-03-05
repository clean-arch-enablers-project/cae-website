import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLinkedin } from '@ng-icons/lucide';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
  HlmMenuBarItemDirective,
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent,
} from '@spartan-ng/ui-menu-helm';
import { HlmIconDirective } from "../../../../libs/ui/ui-icon-helm/src/lib/hlm-icon.directive";

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmMenuItemDirective,
    HlmMenuBarItemDirective,
    HlmMenuGroupComponent,
    HlmMenuSeparatorComponent,
    HlmMenuShortcutComponent,
    HlmIconDirective,
    NgIcon
],
  templateUrl: './header.component.html',
  viewProviders: [provideIcons({ lucideGithub, lucideLinkedin })],
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
