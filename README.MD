# ngx-scroll-indicator

## Installation
Angular Scroll Indicator
====

Angular Component to add scroll indicator.

Live Demo : https://mraghuram3.github.io/#/ngx-scroll-indicator


## Installation

Install it with npm

```bash
$ npm install ngx-scroll-indicator --save
```

## Usage

Import `NgScrollIndicatorModule` in the root module

```ts
import { NgScrollIndicatorModule } from 'ngx-text-highlight';

@NgModule({
  imports: [
    // ...
    NgScrollIndicatorModule.forRoot(),
    ...
  ]
})
```

In your template

```html
<ng-scroll-indicator-component [container]="'container'" [progressbar]="'bar'"></ng-scroll-indicator-component>
<div ngScrollDirective style="height:500px;overflow:scroll;">
  ....
  ....
</div>
```

- **[container]**: string.

  The css class name to be apllied to the container to modift the default style. Define the css class in main style sheet of the application

- **[progressbar]**: string.

  The css class name to be apllied to the container to modift the default style. Define the css class in main style sheet of the application

- **ngScrollDirective**

  Add the directive to the div for which the scroll indicator should track. Specify fixed height to the div and add overflow: scroll paramter to it. 

  ** example css to override the default styling of progress bar **

```css
  .container {
    background: #ccc !important;
  }
  .bar {
    background: yellow !important;
  }

````
## License

MIT © [Raghu Ram M](mailto:mraghuram3@gmail.com)