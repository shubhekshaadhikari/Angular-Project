# Introduction
Angular is a development platform, built on TypeScript. It is a component based framework  for web applications and for creating efficient and sophisticated single-page apps.

It is a developer tools to help develop, build, test and update code.It is also a collection of integrateed libraries that includes routing, forms management, client-server communication and many more. 

# Install Angular
1. Install Node.js
    - Requires Node.js version 12.14 or higher: [Download Node](https://nodejs.org)

2. Install Angular ClI
    - Open terminal and run following command in terminal window:
    ```bash
        npm install -g @angular/cli
    ```

3. Verify Angular CLI installation:
```bash
    ng --version
```

4. Create new Angular project:
```bash
    ng new my-angular-project
```

5. Run Angular application:
```bash
    ng serve
```
- Open your web browser and visit [Angular localhost](http://localhost:4200).

- We can see default Angular app running on `"http://localhost:4200"`.

![alt text](/src/assets/defaultAngularPage.png)

# Install Node Version Manager
NVM is tool for managing Node versions on device.

1. Visit the official NVM GitHub repository: [NVM]( https://github.com/nvm-sh/nvm).

2. Depending on operating system, follow the installation instructions provided in the repository's README file. Here are the instructions for some common operating systems:

    - For Linux/OS X:
        - Open a terminal and run the following command to download the installation script:
        ```bash
            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        ```
        - Follow the instructions in the terminal to complete the installation.

    - For Windows:

        `If PC have any node install previously, uninstall it (only for windows OS).`
        - Visit the NVM for Windows repository: [Download NVM for Windows](https://github.com/coreybutler/nvm-windows)
        - Download the latest installer by clicking on the `"nvm-setup.zip"` file under the `"Assets"` section of the latest release.
        - Once downloaded, extract the contents of the ZIP file.
        - Run the `"nvm-setup.exe"` installer and follow the instructions in the setup wizard.

3. After installation, close and reopen terminal to ensure the NVM command is recognized.

4. Verify the installation by running the following command in terminal:
```bash
    nvm --version
```
5. Use NVM to install and manage different versions of Node.js on system. To install a specific version of Node.js, use the following command:
```bash
    nvm install < node_version >
```
Replace `<node_version>` with the desired Node.js version.

6. To switch between installed Node.js versions, use the following command:
```bash
    nvm use < node_version >
```
Replace `<node_version>` with the version to use.

# Angular Fundamentals
## Components
- It is building blocks that compose an Angular application. 
- It encapsulate specific functionality or a part of user interface and can be reused through application.
- It includes TypeScript class with `@Component()` decorator. The `@Component()` decorater includes:
    - CSS Selector that defines how component is used in template. HTML elements in template that match this selector become instances of component
    - HTML Template instructs ANgular how to render component
    - optional set of CSS styles that define template's HTML elements

```ts
    import { Component } from '@angular/core';
    @Component({
    selector: 'hello-world',
    template: `
        <h2>Hello World</h2>
        <p>This is my first component!</p>
        `
    })
    export class HelloWorldComponent {
    }
```

### Create component
1. Generate new component using terminal
```bash
    ng generate component component_name
```

- By default,above command creates follwing files 
    - The HTML template file (component-name.component.html) contains the structure and layout of the component's view.

    - The CSS file (component-name.component.css) contains the styles specific to the component.

    - The TypeScript file (component-name.component.ts) contains the component class definition, properties, methods, and logic.

    - The spec file (component-name.component.spec.ts) contains unit tests for the component.

2. Generate component manually 
- create directory with component name
- create component_name.ts file inside directory and write following code
```ts
    import { Component } from "@angular/core";
    @Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
    export class NavbarComponent{
    }
```
- create html and css file with same component name inside the above directory


### Life Cycle Hooks
-It is methods that allow to tap into various stages of a component's lifecycle and perform specific actions.

![alt text](/src/assets/lifecycle-hooks.webp)

- Constructor are invoked when angular creates a component or dirctively by calling `new` on class

|Hook method|Purpose|
|---------|----------|
|ngOnChanges()|invoked `every` time there is change in one of input properties of component|
|ngOnInit()|invoked when given component has been intialized,also called only `once` after first `ngOnChanges`|
|ngDoCheck()|invoked when change detector of given component is invoked|
|ngAfterContentInit()|invoked after angular performs any content projection into component's view|
|ngAfterContentChecked()|invoked each time content of given component has been checked by change detection mechanism of Angular|
|ngAfterViewInit()|invoked when component's view has been fully initialized|
|ngAfterViewChecked()|invoked each time view of given component has been checked by change detection mechanism|
|ngDestroy()|invoked just before angular destroys component|

### View Encapsulation
- It is mechanism that controls how component styles are scoped and applied within the component's view.

1. Emulated View Encapsulation (default):
    - styles from main HTML propagate to component
    - styles defined in this components `@component`decorator are scoped to this component only.

2. ShadowDOM View Encapsulation:
    - styles from main HTML do not propagate to component
    - styles defined in this components `@component` decorator are scoped to this component only.

3. None View Encapsulation:
    - styles from component propagate back to main HTML and therefore are visible to all components on page
    - styles defineed in component to become global styles

Example:
```ts
@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    //encapsulation: ViewEncapsulation.ShadowDom
    //encapsulation: ViewEncapsulation.None
})
export class MyComponentComponent {
}
```

### Components Interaction
1. Parent-to-Child Communication(Input Properties)
    - parent binds a value to an input property of child and child can use that for rendering

2. Child-to-Parent Communication(Event Emitters)
    - child can trigger events with relevent data, and parent listens for those events and responds accordingly

3. Sibling Component Communication(Shared Service)
    - create a service with a shared data property and methods to update that data
    - inject the service into sibling components and use it to access and modify the shared data

4. Component Interaction via Routing
    - use routing mechanism to navigate between components annd pass dat via route parametrs or query parameters 

5. Communication through Output Decorator and Template Reference Variables
    - use output properties from child to parent 
    - `#` denotes template refernce variable which is used interact with child directly from parents template 

6. ViewChild and ContentChild
    - ViewChild is used to acess a child that is defined within template of parent
    - ContentChild is ued to acess a child that is projected into parent via `content projection`

### Component Styles
1. Inline Styles
2. External Styles
<!-- explained in template section -->

### Sharing Data between child and parent directives and components
Example:

*Parent Component:*
```ts
    import { Component } from '@angular/core';
    @Component({
        selector: 'app-parent',
        template: `
            <app-child [message]="parentMessage"></app-child>
            <app-child (customEvent)="handleEvent($event)"></app-child>
        `
    })
    export class ParentComponent {
        parentMessage = 'Hello from parent!';
        handleEvent(event: string) {
        console.log('Event received:', event);
    }
    }
```

*Child Component:*
```ts
    import { Component, Input, Output, EventEmitter } from '@angular/core';
    @Component({
        selector: 'app-child',
        template: `
            <p>{{ message }}</p>
            <button (click)="emitEvent()">Trigger Event</button>
        `
    })
    export class ChildComponent {
        @Input() message: string;
        @Output() customEvent = new EventEmitter<string>();
        emitEvent() {
            this.customEvent.emit('Custom event emitted!');
        }
    }
```

### Content Projection
- It is a pattern in which we insert, or project, content we want to use inside another component



---
## Templates
- It declares how that component renders which is define either inline or by file path

1. **Inline Template:**
    - It is defined directly within componenet's TypeScript file using `template` property of `@Component` decorator
    - Here, tepmlate content is enclosed in backticks and can span multiple lines.

```ts
    import { Component } from '@angular/core';
    @Component({
    selector: 'hello-world',
    template: `
        <h2>Hello World</h2>
        <p>This is my first component!</p>
        `
    })
    export class HelloWorldComponent {
    // component's behavior.
    }
```

2. **External Template Files:**
    - It uses seperate file that contains HTML markup for component's view
    - Here, template file is refernced in `'templateUrl'` property of `@Component` decorator.
```ts
    import { Component } from "@angular/core";
    @Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
    export class NavbarComponent{
    }
```

3. **Template inlining with Webpack or Angular CLI:** 
    - Using Webpack or Angular CLI, we can inline external template file during build process which allows us to have separate template files for development and have them bundled into JS file for production. 

    - Inline templates, using `'template-loader'` or Angular CLI's `'--inlineTemplate'` option.

## Template Syntax
- Interpolation
- Property Binding
- Attribute Binding
- Class and Style Binding
- Event Binding
- Template refernce variable 
- Built-in directives

Here to display data we use interpolation, respond to user interactions we use various bindings. 

When the user interacts with the event binding, the event handler method is executed, and the component's properties are updated. As a result, the template automatically reflects the updated values, and the view is synchronized with the component data.

### Text Interpolation
- Angular adds syntax elements that extend HTML so we can insert dynamic values from component. 
- Angular automatically updates the rendered DOM when your component's state changes.

Example:
```html
    <p>{{message}}</p>
```
Value of message comes from componenet class
```ts
    import { Component } from '@angular/core';
    @Component ({
    selector: 'message-interpolation',
    templateUrl: './message-interpolation.component.html'
    })
    export class MessageInterpolationComponent {
        message = 'Hello, World!';
    }
```
Application loads component and its template, user sees following:
```html
    <p>Hello, World!</p>
```

`Use of double curly-braces, instruct Angular to interpolate contents within them.`

### Template Statements
- They are methods or properties that can be use in HTML to respond user events.
- the mechanism where method i bind to event
- The template statements appear in quotes to the right of the = symbol like (event)="statement".
```typeScript
    <button (click)="editProfile()">Edit Profile</button>
```
Here, editProfile is a template statement

### Data Binding
- Angular also supports data bindings, to help set values for properties or attributes or CSS classes or styles or event of HTML elements and pass values to application's presentation logic.

Example 1: 
```html
    //property binding
    <input [value]="username">
```
>`value` property of the `<input>` element is bound to the `username` property in the component. Whenever the `username` property changes in the component, the value of the input field will be updated.

Example 2: 
```html
    //attribute binding
    <button [disabled]="isDisabled">Submit</button>
```
>`disabled` atrribute of `<button>` element is bound to `isDisabled` property of component. If the `isDisabled` property is true, the disabled attribute will be added to the `<button>` element, making it disabled.
>attr. prefix is required for custom attribute
```html
    <div [attr.data-custom]="customValue"></div>
```

Example 3: 
```html
    //class binding
    <div [class.my-class]="isActive">Content</div>
```
>`my-class` CSS class is conditionally applied to the `<div>` element based on the value of the `isActive` property in the component. If `isActive` is true, the class will be added to the element; otherwise, it will be removed.

Example 4: 
```html
    //style binding
    <div [style.color]="'red'">Content</div>
```
>`color` style property is set to `red`, so the text inside the `<div>` element will be displayed in red color.

Example 5: 
```html
    //event binding
    <button (click)="handleClick()">Click Me</button>
```
>`(click)` is the event binding syntax for the click event. It binds the `handleClick()` method from the component class to the button's click event. When the button is clicked, the `handleClick()` method will be executed.

`Use of square brackets, indicates data binding to a value in component class.`

### Two-way binding
- It combines both property binding and event binding, enabling a seamless flow of data in both directions.

- Syntax: `[(ngModel)]="propertyName"`

- If there is any changes made to the input field's value will automatically update the component property, and any changes made to the component property will update the input field's value.

- The use of event binding is to capture changes in the input field and property binding is to set the initial value and update the input field.

- It is also used for Form Validation and Error Handling.

### Pipes
- It helps to transform or format data within template.
- They provide a way to perform common data manipulations without modifying the underlying data directly.
- Pipes can be used to filter, sort, format, and transform data in various ways.

#### **1. Built-in pipes**
|Pipes|Details|
|----------|-----------|
|DatePipe|format dates based on local|
|UpperCasePipe|converts string to uppercase|
|LowerCasePipe|converts string to lowercase |
|DecimalPipe|formats decimal numbers|
|PercentPipe|formats number as percentage|
|CurrencyPipe|formats number as currencies|
|JsonPipe|converts an object into a JSON string|
|SlicePipe|extracts a portion of an array or string|

- Pipes are applied within templates using pipe operator(`|`)
```html
    <p>Date: {{ today | date }}</p>
```
- Chain multiple pipes together to apply multiple transformation to data
```html
    <p>Date and Time: {{ today | date:'short' | uppercase }}</p>
```
- Parameters are passed in pipe after pipe name separated by colons
```html
    <p>Formatted Date: {{ dateValue | date:'shortDate' }}</p>
```

#### **2. Custom pipes**
- They are created using the `@Pipe` decorator and implementing the `PipeTransform` interface.
```ts
    import { Pipe, PipeTransform } from '@angular/core';
    @Pipe({
    name: 'customPipe'
    })
    export class CustomPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        // Custom transformation logic
        return transformedValue;
    }
    }
```
- Used in templates like built-in templates
```html
    <p>Transformed Value: {{ data | customPipe }}</p>
```

### Template reference variables
- It  allow to access elements, directives, or components in template and interact with them directly in component class
- It provides a way to refernce and manipulate elements without using JS selectors or query methods.
- To create a template reference variable, prefix a variable name with hash symbol `#` and assign it to an element, directive, or component in template.

```html
    <input type="text" #myInput>
    <button (click)="logInputValue(myInput.value)">Log Value</button>
```
`myInput` is a template reference variable assigned to the input element which can be accessed in the component class using the variable name. In the `click` event handler, `myInput.value` retrieves the value of the input element, which is then passed to the `logInputValue()` method.


## Directives
- They are  markers on DOM elements that allows to attach behavior or manipulate the element and its content. 
- They enables to extend the functionality of HTML elements or create reusable components with their own custom logic and templates.

### Built-in directives
- Add features to templates by using directives which modify behavior or apperance of HTML elements.

`Use directives to perform a variety of tasks, such as dynamically modifying the DOM structure.` 

|Built-in Directives|Details|
|-------------|-------------|
|ngIf (structural)|Conditionally adds or removes an element from DOM based on a condition|
|ngFor (structural)|Iterates over a collection and generate multiple instances of an element|
|ngSwitch (structural)|Conditionally renders one of multiple elements based on a specific value|
|ngClass (attribute)|Adds or removes CSS classes based on certain conditions|
|ngStyle (attribute)|Applies inline styles to an element based on certain conditions|
|ngModel (attribute)|Create a two-way data binding between a form control and a component property|

### Attribute directives
- They change behaviour or look of an existing element by manipulating its attrivutes or applying custom styles
```html
<!-- ngClass -->
    <div [ngClass]="{ 'highlight': isHighlighted, 'disabled': isDisabled }">Some content</div>
<!-- ngStyle -->
    <div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">Some content</div>
<!-- ngModel -->
    <input type="text" [(ngModel)]="name">
```

#### Building an attribute directive
1. Create a directive using cli,`ng generate directive directive_name`
    - generates by default `app/highlight.directive.ts` which has following code 
    
    ```ts
    import { Directive } from '@angular/core';
    @Directive({
        selector: '[appHighlight]'
    })
    export class HighlightDirective {
        constructor() {}
    }
    ```
    - `[appHighlight]` is attribute selector to change attribute of elements in template

    ```ts
    import { Directive, ElementRef } from '@angular/core';
    @Directive({
        selector: '[appHighlight]'
    })
    export class HighlightDirective {
        constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
        }
    }
    ```
    - `ElementRef` is a wrapper around a native DOM element (HTML element) object which contains the property nativeElement and holds the reference to the underlying DOM object. We can use it to manipulate the DOM

2. Use attribute directive
    ```html
    <div appHighlight>This div will have a yellow background.</div>
    ```

3. Passing values into an attribute directive using input
    ```ts
    import { Directive, ElementRef, Input } from '@angular/core';
    @Directive({
        selector: '[appHighlight]'
    })
    export class HighlightDirective {
        @Input() color: string;
        constructor(private el: ElementRef) { }
        ngOnInit() {
            this.el.nativeElement.style.color = this.color;
        }
    }
    ```
    ```html
    <p appHighlight [color]="'red'">This paragraph has a custom color.</p>
    ```

### Structural Directives
- They are responsible for HTML layout manipulation by adding, removing, or manipulating elements based on conditions

```html
<!-- ngIf -->
   <div *ngIf="showElement">This element is shown based on a condition</div> 
<!-- ngFor -->
    <ul>
        <li *ngFor="let item of items">{{ item }}</li>
    </ul>
<!-- ngSwitch -->
    <div [ngSwitch]="condition">
        <div *ngSwitchCase="'value1'">Condition A</div>
        <div *ngSwitchCase="'value2'">Condition B</div>
        <div *ngSwitchDefault>Default Condition</div>
    </div>
```

- Use of star notation `(*)` with structural directives and typically work with `ng-template` or wrap an element with a structural directive.

```html
    <div *ngIf="condition; else elseBlock">
    Content to display when condition is true.
    </div>
    <ng-template #elseBlock>
    Content to display when condition is false.
    </ng-template>
```

## Modules
- It is used to put logical boundaries in application.
Build sepearate functions in module and import and export as per requirement in applications

## Dependency injection
- It helps to create and manage dependencies between different componenets and services in an application.

1. Dependency Consumer: The class that requires dependencies declares them in its constructor or other injection points. Angular identifies these injection points by inspecting the constructor parameter types.

2. Dependency Provider: The dependency provider is responsible for creating and providing instances of the dependencies. Providers are typically registered at the component, NgModule, or root level.


**1. Defining Dependencies:**
- create class or service that provides functionality
```ts
    import { Injectable } from '@angular/core';
    @Injectable()
    export class LoggerService {
    log(message: string) {
        console.log(message);
    }
    }
```

**2. Injecting Dependencies:**
- to use dependencies in another class, inject it 
```ts
    import { Component } from '@angular/core';
    import { LoggerService } from './logger.service';
    @Component({
        selector: 'app-example',
        template: `
            <button (click)="logMessage()">Log Message</button>
        `
    })
    export class ExampleComponent {
        constructor(private logger: LoggerService) {}

        logMessage() {
            this.logger.log('Hello, Dependency Injection!');
        }
    }
```

**3. Providing Dependencies:**
- how dependencies are instantiated are defined in providers at module 
```ts
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { LoggerService } from './logger.service';
    import { ExampleComponent } from './example.component';
    @NgModule({
        imports: [BrowserModule],
        declarations: [ExampleComponent],
        providers: [LoggerService],
        bootstrap: [ExampleComponent]
    })
    export class AppModule { }
```

# Routing and Navigation
Routing refers to the process of defining different routes in your Angular application and determining which component should be displayed for each route. It involves setting up the routing configuration, defining routes, and handling navigation between routes. Routing is managed by the Angular Router module.

Navigation, on the other hand, is the action of moving from one view or route to another within your application. It can be triggered by user interactions like clicking a link or button, or it can be done programmatically using code. Navigation relies on the routing configuration to determine the destination route and load the corresponding component.

**1. Setting Up Routing:**
- Create Angular application 
- Import necessary routing modules in application's main module(app.module.ts)
```ts
    import { RouterModule, Routes } from '@angular/router';
```
- Define routes for application using Routes array. Each route object consists of a path and a component to be displayed.
```ts
    const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    ];
```
- Configure RouterModule with defined routes by adding to imports array in application module.
```ts
    @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
```

**2. Display Router Outlet:**
In application's main template file (app.component.html), add a <router-outlet></router-outlet> tag which acts as a placeholder where the corresponding component for the current route will be rendered.

**3. Navigating between Routes:**
- Inject Router service into component constructor:
```ts
    constructor(private router: Router) { }
```
- Use `navigate` method of Router service to navigate to a specific route:
```ts
    navigateToAbout() {
    this.router.navigate(['/about']);
    }
```
- We can navigate using router links in template as well. For e.g:
```html
    <a routerLink="/about">About</a>
```

**4. Route Parameters:**
- We can define dynamic routes that accept parameters. Define a route with a parameter placeholder using `:paramName` syntax:
```ts
    { path: 'product/:id', component: ProductComponent }
```
- Acess route parameter in component using ActiveRoute service:
```ts
    import { ActivatedRoute } from '@angular/router';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
    this.route.params.subscribe(params => {
        const productId = params['id'];
        // Use the productId in your component logic
    });
    }
```

**5. Child Routes:**
- Create nested routes by defining child routes within a parent route. Modify routes array to include a children property:
```ts
    const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductListComponent },
      { path: 'details/:id', component: ProductDetailsComponent }
    ]
  }
];
```
- Add `<router-outlet></router-outlet>` in parent component's template to display child components.

**6. Route Guards:**
Allow to control access to routes based on certain conditions.

# Form 
![alt text](/src/assets/formdifference.png)

## Template Driven Form
- import `FormsModule` from `@angular/forms` for template-driven form
- building HTML forms and associate form control with variable using `ngModel` with two-way binding

### ngModel
- directive used to create two-way data binding between a form control and component property
- allows to track and update value of form control

### ngForm
- directive to create a form and track its state 
- provides additional functionality for managing form validation and submission

### ngSubmit
- directive used to handle form submission event

```html
    <form #myForm="ngForm" (ngSubmit)="submitForm(myForm.value)">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" [(ngModel)]="formData.name">
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" [(ngModel)]="formData.email">
    </div>
    <button type="submit">Submit</button>
    </form>
```
- handle form submission with `(ngSubmit)`
```ts
    import { Component } from '@angular/core';
    @Component({
        selector: 'app-my-form',
        templateUrl: './my-form.component.html',
        styleUrls: ['./my-form.component.css']
    })
    export class MyFormComponent {
        formData = {
            name: '',
            email: ''
        };
        submitForm(formValue: any) {
            console.log(formValue);
        }
    }
```

## Reactive Form
- import `ReactiveFormsModule` from `@angular/forms` for reactive form
- building HTML form by creating an instance of `FormGroup` and define the form controls using `FormControl` instances or groups of controls using `FormGroup` or `FormArray`. Use the `formGroup`, `formControl`, and `formArrayName` directives in the template to bind form controls to form inputs.

### Form Control
- class representing an individual form contrl, such as input field use to track value and validation status of control

### Form Builder
- class providing way to create instances of `FormGroup`and `FormControl` in readable mannner

### Form Group
- class representing group of form controls 

### Form Array
- class to manage dynamic arrays of form controls within a form group

```html
    <form [formGroup]="myForm" (ngSubmit)="submitForm()">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" formControlName="name" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" formControlName="email" required>
    </div>
    <button type="submit">Submit</button>
    </form>
```
- handle form submission with `(ngSubmit)`
```ts
    import { Component, OnInit } from '@angular/core';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    @Component({
        selector: 'app-my-form',
        templateUrl: './my-form.component.html',
        styleUrls: ['./my-form.component.css']
    })
    export class MyFormComponent implements OnInit {
        myForm: FormGroup;
        constructor(private formBuilder: FormBuilder) {}
        ngOnInit() {
            this.myForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
            });
        }
        submitForm() {
            console.log(this.myForm.value);
        }
    }
```

## Form Validation
- It enforce rules and constraints on user input for data integrity and accuracy

|sync validators|async validators|
|---------|------------|
|takes a control instance and immediately return with either a set of validation errors or null|takes a control instance and return `Promise` or `Observable` that emits a set of validation errors|
|pass in as second argument when instaniate `FormControl`|pass in as third argument when instaniate `FormControl`|

**1. Built-in Validators**
- `required`: ensures form control has a non-empty value
- `min` and `max`: specifies min and max values allowed for a numeric input
- `minLength` and `maxLength`: specifies min and max length odf a string input
- `pattern`: validates input against regular expression pattern
- `email`: validates input is a valid email address
- `requiredTrue`: ensure checkbox or radio button is selected
- `nullValidator`: validator that performs no operation
- `compose`: compose mutiple validators into a single functions that returns union of individual error maps for provided control
- `composeAsync`: compose mutiple async validators into a single functions that returns union of individual error objects for provided control

```ts
    import { Validators } from '@angular/forms';
    // creating form control 
    const nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    // apply built-in validators to an input
    <input type="text" name="name" [(ngModel)]="name" required minlength="3">
```
**2. Custom Validators**
- They are functions that take a form control as an argument and return a validation error object or null if input is valid
```ts
    import { AbstractControl, ValidationErrors } from '@angular/forms';
    // Custom validator function
    function forbiddenNameValidator(control: AbstractControl): ValidationErrors | null {
        const forbiddenNames = ['admin', 'user', 'superuser'];
        const forbidden = forbiddenNames.includes(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    }
    // Applying to a form control
    const nameControl = new FormControl('', forbiddenNameValidator);
    // Applying to an input element in a template
    <input type="text" name="name" [(ngModel)]="name" [appForbiddenNameValidator]="forbiddenNames">
```

# Services 
It is a class that is typically responsible for providing a specific functionality or data to other parts of an application. 

It is used for tasks such as fetching data from a server, sharing data between components, encapsulating business logic, handling authentication, and more. 
 
### **Create service:**
They are created using the `@Injectable` decorator, which enables them to be injected as dependencies into other components or services.

Example:
```ts
    import { Injectable } from '@angular/core';
    @Injectable()
    export class DataService {
        private data: string[] = [];
        addData(item: string) {
            this.data.push(item);
        }
        getData() {
            return this.data;
        }
    }
```

## HTTP Client
request(), delete(), get(), head(), jsonp(), options(), patch(), post(), put()

1. Import `HttpClientModule` 
```ts
    import { HttpClientModule } from '@angular/common/http';

    @NgModule({
    imports: [HttpClientModule],
    })
    export class AppModule { }
```

2. Inject `HttpClient` service into component for Http requests
```ts
    import { HttpClient } from '@angular/common/http';

    @Injectable()
    export class DataService {
    constructor(private http: HttpClient) {
    }
    }
```

3. Making GET requests using `get()` which returns observabe and subscribe to handle requests
```ts
    import { HttpClient } from '@angular/common/http';

    @Injectable()
    export class DataService {
    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get('/api/data');
    }
    }
```

4. Making POST requests which allows to send data along with request
```ts
    import { HttpClient } from '@angular/common/http';

    @Injectable()
    export class DataService {
    constructor(private http: HttpClient) {
    }

    postData(data: any) {
        return this.http.post('/api/data', data);
    }
    }
```

# RxJs Reactive Development
- Reactive Extensions for JavaScript
- Library for reactive programming in JavaScript
- Provides a wide range of operators and functions to handle asynchronous and event-based programming in a more functional and declarative way
- Used for handling asynchronous operations, managing data streams, and implementing reactive patterns.

**1. Observable**
- represent streams of data over time and emit values, errors and completion signals
- handle asynchronous operators like HTTP requests, user events and timers
- Observables have two methods: subscribe and unsubscribe.
```ts
    import { Observable } from 'rxjs';

    const observable = new Observable(sub => {
    sub.next('Hello');
    sub.next('World');
    sub.complete();
    });

    observable.subscribe(value => console.log(value));
```

**2. Observer**
- object that defines callback to handle values,errors and completion when subscribing to observables
```ts
    import { Observable } from 'rxjs';

    const observable = new Observable((sub) => {
    sub.next('Hello');
    sub.next('World');
    sub.complete();
    });

    const observer = {
    next: (value) => {
        console.log(value);
    },
    error: (error) => {
        console.error(error);
    },
    complete: () => {
        console.log('Completed');
    }
    };

    observable.subscribe(observer);
```

**4. Operator**
- function that allows us to perform certain actions on events executed by observables.
- done using pipe method
```ts
    observable.pipe(
    map(value => value.toUpperCase()),
    filter(value => value.startsWith('H'))
    ).subscribe(value => {
    console.log(value); // Output: 'HELLO'
    });
```

**3. Subscription**
- subscription to the observable will trigger the observable to execute.
```ts
    observable.subscribe(
    value => console.log(value), // Next value
    error => console.error(error), // Error handling
    () => console.log('Complete') // Completion handling
    );
```

# Angular CLI
Command-line tool provided by Angular.
|COMMAND|Details|
|-----------|----------|
|ng new app_name|Creates and intializes a new Angular app that is default project for new workspace|
|ng build|Compiles angular application into an output directory|
|ng serve|Builds and serves application, rebuilding on file changes| 
|ng generate|Generates or modifiers files based on a schematic| 
|ng test|Runs unit test on a given project|
|ng e2e|Builds and serves Angular application, then runs end-to-end tests|

# Libraries
|Library|Details|
|----------|---------|
|Angular Router|Advanced client-side navigation and routing based on Angular components. Supports lazy-loading, nested routes, custom path matching, and more.|
|Angular Forms|Uniform system for form participation and validation.|
|Angular HttpClient|Robust HTTP client that can power more advanced client-server communication.
|Angular Animations|Rich system for driving animations based on application state.|
|Angular PWA|Tools for building Progressive Web Applications (PWA) including a service worker and Web application manifest.|
|Angular Schematics|Automated scaffolding, refactoring, and update tools that simplify development at large scale.|