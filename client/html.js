const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/assets/css/style.css" type="text/css">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/assets/js/main.bundle.js"></script>
    </body>
  </html>
`
}

export default Html
