# Luiro Dev

## Project structure
* *assets* - Static content (jpg, png, etc.)
* *modules* - Files that are specific for only certain part of the application. Each module can have own *components*, *store*, etc. folders. Files in these folders are used only by the specific module.
  * *components* - Module specific components
* *pages* - Layouts for the different pages of the app
* *plugins* - Plugin specific code
* *lib* - Reusable components which can be used anywhere in the project
* *router* - Main router of the app

## Styling
There are global classes that can be used anywhere in the project. Right now these classes just include styles for text.
For example, you can use class `body1` without importing it in the component. These classes are in `styles.global.scss` file.
If your component needs to change or expand the properties in these global classes, you have 2 options.

1. Create your own class and use it with the global class: `class=body1 my-class`
2. Use the mixin for the global class: `.my-class { @include mixins.body1 }`

Prefer option 1 if you can because option 2 will duplicate the styles declared in the mixin.

Use camelCase in class names. Styling does not work properly if you use `-`in the class name.
