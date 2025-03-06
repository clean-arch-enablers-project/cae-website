import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent } from '@spartan-ng/ui-carousel-helm';

type carrouselType = {
  title: string
  description: string
  imageSrc: string
}

@Component({
  selector: 'app-home',
  imports: [HlmButtonDirective, HlmCarouselComponent, HlmCarouselContentComponent,HlmCarouselItemComponent,HlmCarouselNextComponent,HlmCarouselPreviousComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { 'class': 'flex flex-col gap-5' }
})
export class HomeComponent {
  items = Array.from({ length: 5}, (_, i) => i + 1);

  carrousel: Array<carrouselType> = [
    {
      title: "Clean Architecture Made Easy",
      description: "We make applying Clean Architecture effortless. With Clean Arch Enablers (CAE), your application becomes modular, organized, and ready to scale — without turning into an unmanageable monolith.",
      imageSrc: "https://placehold.co/1000x400"
    },
    {
      title: "Tools to Build and Scale",
      description: "We generate clean, modular code for you. With tools like cae-cli, you can create fully structured components with a single command.",
      imageSrc: "https://placehold.co/1000x400"
    },
    {
      title: "A Powerful SDK",
      description: "CAE SDK provides utility libraries and standardized patterns so you don’t have to reinvent the wheel.",
      imageSrc: "https://placehold.co/1000x400"
    },
    {
      title: "Modern Concepts: Angularization & Satellites",
      description: "Turn your code into well-defined, modular components. The Angularization concept structures your code around features, while Satellites handle cross-cutting concerns (logging, caching, validation) without polluting your core logic.",
      imageSrc: "https://placehold.co/1000x400"
    },
    {
      title: "Built by Devs, for Devs",
      description: "Open Source & Active Community",
      imageSrc: "https://placehold.co/1000x400"
    },
    {
      title: "Clean Architecture Made Easy",
      description: "We make applying Clean Architecture effortless. With Clean Arch Enablers (CAE), your application becomes modular, organized, and ready to scale — without turning into an unmanageable monolith.",
      imageSrc: "https://placehold.co/1000x400"
    },
  ]
}
