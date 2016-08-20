# Theme selector UI component

This directive is designed to provide a graphical interface for selection of available themes.

Themes can be substituted by content of any other type.

## Demo
Click <a href="https://rawgit.com/g1eb/angular-theme-selector/master/" target="_blank">here</a> for a live demo.

## Installation

1) Install 'angular-theme-selector' with bower

```
bower install angular-theme-selector
```

2) Add 'g1b.theme-selector' module to your app config


```javascript
angular.module('myApp', [
  'g1b.theme-selector',
  ......
])
```

3) Use directive in a view

```html
<theme-selector themes="themes" selected="selected" on-select="print(now)"></theme-selector>
```

### Attributes

|Property        | Usage           | Default  | Required |
|:------------- |:-------------|:-----:|:-----:|
| themes | List of available themes | none | yes |
| selected | This object will contain the selected theme | none | no |
| on-select | Handler function that is fired when a theme is selected | none | no |

## Dependencies

* [AngularJS](https://angularjs.org/)
