# Material design collection for web

Design your web pages with material-based components!

- All components are designed and developed in accordance with Google's Material Design principles, ensuring consistency and familiarity across your applications.

- Each component is modular and highly customizable, allowing you to customize them to fit your specific design requirements.

- These components are built completely user-friendly and responsive.

Themes
-------
- Dark
- Light

Language
-------
- English (ltr)
- Persian (rtl)

Simple example
----
```html
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="./css/themes.min.css">
    <link rel="stylesheet" href="./css/components.min.css">
    <title>Demo</title>
</head>
<body>
    <button class="btn">Click here</button>
</body>
</html>
```


How to use?
------
1. First, you need to include themes CSS to your web page header:
```html
<link rel="stylesheet" href="./css/themes.min.css">
```

- You can change colors and fonts based on your taste, these colors are assigned as CSS variables inside this file **(themes.css)**.

- **(Optional)** There is another file in the project assets named **structure.css**, if you wan to access pre-made utilities like coloring, structuring with rows and columns, dividers and other stuff, you can link this file too:
```html
<link rel="stylesheet" href="./css/structure.min.css">
```

2. **Include your components:** there are a few components available in **components** directory, you can link them into your project:
```html
<link rel="stylesheet" href="./css/components/component-file.css">
```
For instance if you need button and progress bar components, link them separately:
```html
<link rel="stylesheet" href="./css/components/button-unelevated.min.css">
<link rel="stylesheet" href="./css/components/button-text.min.css">
<link rel="stylesheet" href="./css/components/button-utils.min.css">
<link rel="stylesheet" href="./css/components/progress-linear.min.css">
<link rel="stylesheet" href="./css/components/progress-circular.css">
```

3. **Use your component:** after including all of the required components you can use inside your page body, here is an example of button component:
```html
<button class="btn">Click here</button>
```
**See demo for more examples**

Components
-------
* **Core**
  * Components bundle: ```components.min.css```
  * Themes: ```themes.min.css```
* **Buttons**
  * Normal buttons: ```button-unelevated.min.css```
  * Text buttons: ```button-text.min.css```
  * Buttons utilities: ```button-utils.min.css```
* **Form**
  * Checkbox: ```checkbox.min.css```
  * Radio: ```radio.min.css```
  * Switch: ```switch.min.css```
  * Input: ```input.min.css```
  * Select: ```select.min.css```
  * Textarea: ```textarea.min.css```
  * Slider: ```slider.min.css```
* **Progress bar**
  * Linear: ```progress-linear.min.css```
  * Circular: ```progress-circular.min.css```
* **Tabs**
  * Tabs: ```tabs.min.css```
