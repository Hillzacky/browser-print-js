# browser-print-js
Page browser print vanilla javascript

## CDN
```
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/Hillzacky/browser-print-js@latest/browser-print-js.min.js"></script>
```

## Use
```
Page.print(size,layout,color,header,footer)
```
### Default
String size = 'a4' \
String layout = 'portrait' \
Boolean color = true \
Boolean header = false \
Boolean footer = false

### CSS
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>receipt</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
  <link rel="stylesheet" href="css/paper-layouts.css">
  <style>@page { size: 58mm 116mm }</style>
</head>

<body class="POS-58">
  <section class="sheet padding-3mm">
    ...
  </section>
</body>
</html>
```
