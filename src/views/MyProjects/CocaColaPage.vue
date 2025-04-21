<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    <header id="header">
      <img src="https://www.hubspot.com/hs-fs/hubfs/coca%20cola.png?width=400&height=400&name=coca%20cola.png"
        alt="coca-cola-logo" id="header-img">
      <h1>Coca-Cola</h1>
      <nav id="nav-bar">
        <a href="#submit" class="nav-link">Submit</a>
        <a href="#video" class="nav-link">New commercial</a>
        <a href="#planet" class="nav-link">Influence</a>

      </nav>

    </header>

    <h2>Delicious and refreshing</h2>

    <form action="https://www.freecodecamp.com/email-submit" method="post" id="form">

      <input id="email" type="email" placeholder="Enter your email address" name="email" required>
      <input type="submit" id="submit">
    </form>

    <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/4RSTupbfGog?si=d6t09VcvLeu6uVNc"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <div class="container">

      <div id="planet">
        <img
          src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/57486473_344074433128582_1010920952269111296_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_MC_T6JztA4Q7kNvgHh6OJa&_nc_zt=23&_nc_ht=scontent-arn2-1.xx&_nc_gid=A4I3-mQP5wXeVDOj-wlbhRy&oh=00_AYALWdt9QAV_CgIqAgr3uJb2oJ0erDkf7WD5pySCDUVIIA&oe=6777BB7C"
          alt="coca-cola-image" width="170">
        <h3>We care about our planet</h3>
        <p>We strive to create a more sustainable and better future for all of us. To make a difference in people's
          lives,
          in communities and for our planet by doing business the right way. By becoming a better company, we can help
          build a more stable and sustainable future for all of us.</p>
      </div>

      <div id="prices">
        <img
          src="https://static1.squarespace.com/static/5fc308d31c8c7413143fef21/t/5fc711d5a907d7439cd24b9e/1606881769362/Coke_thumbnail.png?format=1500w"
          alt="coca-cola-app" width="200">
        <h3>Win awesome prices with our app</h3>
        <p>Download the Coca‑Cola app for the chance to win great prizes. Enter code under cork or play our games to
          collect in-app currencies. It's that simple!</p>
      </div>

      <div id="people">
        <img src="https://www.almanagroup.com/wp-content/uploads/2019/01/Coca-Cola-2.jpg" alt="coca-cola-personnel"
          width="300">
        <h3>We also care about people</h3>
        <p>We believe that a diverse, fair and inclusive workplace makes us stronger as a company, enables us to create
          a
          better shared future for employees and communities, opens up equal opportunities and builds togetherness in
          our
          workplaces and in society.</p>
      </div>

    </div>

    <h3 id="brandsh3">Our brands</h3>
    <div id="brands">

      <img src="https://www.coca-cola.com/content/dam/onexp/global/icons/Coca-Cola.svg" alt="coca-cola-logo">
      <img src="https://www.coca-cola.com/content/dam/onexp/se/sv/brands/fanta/fantalogoregular.png" alt="fanta-logo">
      <img src="https://www.coca-cola.com/content/dam/onexp/global/icons/Sprite.svg" alt="sprite-logo">
      <img src="https://www.coca-cola.com/content/dam/onexp/se/sv/brands/brand-logos/no_mer_logo_colored_500x180.png"
        alt="MER-logo">
      <img
        src="https://www.coca-cola.com/content/dam/onexp/se/sv/brands/brand-logos/sw_bonaqua_logo_colored_500x180.png"
        alt="Bonaqua-logo">
      <img src="https://www.coca-cola.com/content/dam/onexp/se/sv/logo-white/powerade.png" alt="Powerade-logo">
      <img src="https://www.coca-cola.com/content/dam/onexp/se/sv/brands/brand-logos/sw_royal_bliss_logo_221x180.png"
        alt="Rotal-bliss-logo">

    </div>

  </body>

  </html>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: white;
}

body {
  background: red;
}

header {
  top: 0;
  padding-left: 20px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: white;
  color: red;
  position: fixed;
}

h2 {
  padding-top: 50px;
  font-size: 65px;
  text-align: center;
}

button:hover {
  background: lightgrey;
  opacity: 0.9;
  cursor: pointer;
  
}

form {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 5px;
}

input {
  width: 300px;
  height: 30px;
  color: black;
  font-size: 20px;
  border: 1px solid black;
  padding-left: 5px;
  box-shadow: -1px 2px 3px black;
}

button {
  background: white;
  border: 1px solid black;
  border-radius: 3px;
  height: 30px;
  width: 65px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  box-shadow: -1px 2px 2px black;
}

h1 {
  font-size: 50px;
  padding-left: 10px;
  font-style: italic;
  color: red;
  border: none;
  background-color: white;

  }

#header-img {
  width: 70px;
  border: 1px solid black;
  border-radius: 50%;
}

#video {
  margin-top: 100px;
  display: block;
  width: 800px;
  height: 500px;
  border: 20px solid white;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}

nav {
  display: flex;
  gap: 40px;
  padding: 0rem calc((100vw - 1200px)/2);
}

a {
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
  color: red;
  text-decoration: none;
}

#people, #planet, #prices {
  width: 25%;
  background: white;
  border-radius: 10px;
  border: 1px solid black;
}

.container img {
  width: 100%;
  border-radius: 10px;
}

.container h3 {
  font-size: 25px;
  text-align: center;
  color: red;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
}

.container p {
  color: red;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
}

.container {
  margin-top: 150px;
  display: flex;
  justify-content: center;
  gap: 5%;
  font-size: 20px;
}

#brandsh3 {
  margin-top: 100px;
  font-size: 55px;
  text-align: center;
}

#brands {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  gap: 50px;
  background: white;
}

#brands img {
  width: 80px;
}

@media (max-width: 900px) {

  h1 {
    font-size: 35px;
  }

  h2 {
    margin-top: 90px;
    font-size: 50px;
  }

  #video {
    margin-top: 60px;
    width: 650px;
    height: 400px
  }

  #header-img {
    width: 50px;
  }

  header {
    height: 60px;
  }

  nav {
    padding: 0rem calc((100vw - 640px)/2);
  }

  a {
    font-size: 22px;
  }

  #people, #planet, #prices {
  width: 32%;
}

  .container {
    gap: 10px;
    margin-top: 80px;
  }

  .container p {
    font-size: 17px;
  }

  .container h3 {
    font-size: 20px;
    margin-top: 2px;
    margin-bottom: 5px;
  }

  #brandsh3 {
    margin-top: 60px;
  }

  #brands img {
  width: 50px;
}

#brands {
  gap: 30px;
}
}
</style>