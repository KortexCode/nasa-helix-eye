export const template = (html: string, initialProps = {}, styleTags: string): string => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;600&display=swap" rel="stylesheet">
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
  ${styleTags}
  <title>Helix App</title>
</head>

<body>
    <div id="app">
     ${html}
    </div>
    <script>window.__INITIAL_PROPS__ = ${JSON.stringify(initialProps)}</script>
    <script defer src="app.js" type="text/javascript"></script>
</body>

</html>`;
};
