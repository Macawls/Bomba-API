export const generateGreetingPage = (options, currentDate) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${options.title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />
    <style>
      body {
        background-color: ${options.colors.bg};
        font-family: 'Poppins', sans-serif;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        overflow: hidden;  
        text-align: center;
      }

      .card {
        background-color: ${options.colors.card};
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: ${options.colors.heading};
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      a {
        text-decoration: none;
        color: ${options.colors.text}
      }

      ul {
        padding: 25px;
        list-style: none;
        text-align: left;
      }

      li {
        padding: 10px;
        font-size: larger;
      }

      span {
        font-size: smaller;
        font-style: italic;
      }

      i {
        font-size: xx-large; 
        margin-right: 5px; 
      }

    </style>
    <script src="https://kit.fontawesome.com/7d44e1efcc.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="card animate__animated animate__slideInUp">
      <h1 class="animate__animated animate__bounceInDown">${options.heading}</h1>
      
      <p class="animate__animated animate__pulse animate__infinite animate_faster">${
        options.message
      }</p>

      <img class="animate__animated animate__flipInY animate__delay-1s" style="width: 200px; border-radius: 10px;" src="${
        options.imageSrc
      }" />

      
      <ul>
        <li class="animate__animated animate__fadeInLeft animate__delay-2s animate_faster"><a href="${
          options.links.itch
        }" target="_blank"><i class="fab fa-itch-io"></i> Itch.io - <span>Desktop or Browser</span></a></li>
        <li class="animate__animated animate__fadeInLeft animate__delay-3s animate_faster" ><a href="${
          options.links.googlePlay
        }" target="_blank"><i class="fab fa-google-play"></i> Google Play - <span>Android</span></a></li>
        <!-- Add more stores as needed -->
      </ul>

      <a style="font-size: smaller;" href="https://macawls.dev/" target="_blank"> &copy; ${currentDate.getFullYear()} Macawls | All Rights Reserved  </a>
    </div>
  </body>
  </html>`;
