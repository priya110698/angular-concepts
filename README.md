# ListUser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
 // Data Passing through Routing 
    //General End:
    // consider size limitation too

<!-- Comprehensive view of Decorators:
Decorates - Decorates the behaviour of elements.
Means, Adding extra features or capabilities to a class, method, or property without changing its core functionality.
Which helps to manage components, directives, services, and modules. -->

<!-- 
Comprehensive view of decorators:
Decorates -
 -> Decorates the functionality 
 -> Decorates the behavior of elements. && improving functional things in core functionalities && simplifies the developments.
Means, Adding extra features or capabilities to a class, method, or property without changing its core functionality.
Which helps to manage components, directives, services, and modules.
 -->








Class Decorators: @Component, @Directive, @Injectable, @NgModule, @Pipe.

Property Decorators: @Input, @Output, @HostBinding, @ViewChild, @ViewChildren, @ContentChild, @ContentChildren.

Method Decorators: @HostListener.

Parameter Decorators: @Self, @SkipSelf, @Optional, @Inject




Chattan : detailed view about decorator





Directive:
 What is - A directive is a specific marker in the template that is used to manipulate the behavior of DOM elements.
 
 Kinds:
 1. Attribute Dierctive
 2. Structural Directive
 3. Custom Directive - That will be either Attribute / Structural behaviour.

-------------------------------



@Injectable:

 -> Define a class service
 -> It can be injected other classes as dependancy && we can use this service feature

 -> Using "providedIn" as "root" meta-data within @Injectable annotation which will used by throught application without needing to declare it in module or component providers.

 -> If we not mention - "providedIn" as "root" means that service file will be the module /component level service. We have to declare it in module / component providers to access this service.

 -> If not exsist means, we have to handle it manually. which will having drawbacks like loss of singleton(multi intance will create, so state updatation will not happen so State management will get affect).
 -> And shared feature will get affect
 

@NgModule
What?
-> It's a class in ng
-> defined as @ngModule decorator

What to do?
-> It organize related component, directive, pipes, services into a block
After organize what it'll do?
-> Controls their availability with keywords - import & export & DI

Why is this? [Ex: in pic]
-> Organize our larger application

What if, this feature not in ng? 
-> Centralized Management is not available makes imports as repetively
-> Shared Contexts also will get affect so tha value will not get updated properly in DOM



@Pipe
What?
-> this a class, defined as decorator by using @pipe in typescript 


What to do?
-> It transforms data in view-template without affecting components original data

Why is this? 
-> This is one of the angular's dependecy injection system to specify the normal class as a pipe for using in templates

What if, this feature not in ng? 
-> declarative way to format / transform data in template will not simplified
-> code repetitive,  less maintainable code

Finally:
It simplify the process by abstracting(Abstracting means hiding the unnecessary details of how something works and showing only what’s essential for using it. It simplifies complexity by creating a clean, reusable, and focused interface, so you can focus on what you need to do, not how it’s done.

For example:
Using an Angular Pipe like {{ date | date:'short' }} hides all the formatting logic and just gives you the formatted date. You don’t need to know how it formats—just that it works.] and centralizing transformation logic in an elegant and reusable manner.



















