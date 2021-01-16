# DDDAAngularMaterialWFApp002
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

ng add @angular/material
ng g m materl [Creating a module to keep all Angular material related modules]
	/**
	 * This is the Common module we create for the Angular Material Components
	 * Instead of massing up material Components in app.module.ts file, will import & Export all modules here 
	 * 
	 * To create the module we use command : ng g m material
	 * Now go to the material/material.module.ts
	 *      Delete common module : @anular/common
	 *      create exports module inside @NgModule like above
	 *      Create 1 constant veriable to define all the imported material modules : materialImportExportComponents
	 *      Use this created constant variable in imports and exports part : imports: [ materialImportExportComponents ],
	 * Now go to the app.module.ts, import the created material module and decalre inside: imports: MaterialModule 
	 */
	 	 
ng g c component/textdecoration [text Decoration by using : typography]
	[By default, Angular Material doesn't apply any global CSS. To apply the library's typographic styles more broadly, you can take advantage of the mat-typography CSS class. This class will style all descendant native elements.
	]

ng g c component/matbuttons   
ng g c component/matButtontogle


<<<<<<<<  PUSH the Project to Git Hub  >>>>>>>>>
Create the project in GitHub, without Create and initialize README file
	Go to the project root folder and Right Clik and open: Git Bash here
		<- git init
		<- git remote add origin https://github.com/ajitgiri/DDDA-Angular-Material-WF-App001.git
		<- git remote -v :To check the permisions like (fetch/push)
		<- git add . : To add all the files to the index to pushed them to remore repository
		<- git commit -m "This is my initial Push to Repository"
		<- git push origin master 
<<<<<<<<  END			>>>>> >>>

