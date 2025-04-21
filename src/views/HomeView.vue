<template>
  <h1>Välkommen till min sida!</h1>

  <div class="span-elements">

    <div class="introduction">
      <h3 id="introduction">Mitt namn är Robin Nordling jag är 24 år gammal och har just avslutat min andra kurs inom programmering och
        söker nu min första anställning.
        <br><br>
        Här kan du ta del av mina projekt och få en uppfattning om hur jag jobbar, och vilka mina styrkor är,
        men först tänkte jag presentera mig själv lite djupare.
      </h3>
    </div>

    <img alt="Klorens" src="../assets/Klorens.jpg" id="mypicture">

    <div class="about-me">
      <h2>Mer om mig</h2>

      <h4>Jag är en samlad och kreativ person som analyserar och planerar i förväg. Jag motiveras starkt av att
        hjälpa människor och lägger alltid ner mitt hjärta i mitt arbete. Det gör mig ambitiös och driven att ge kunden det den frågar efter så snabbt som möjligt men försöker även att se över detaljer som gör produkten personlig för att kunden ska känna att den fått bästa möjliga resultat. <br><br>Jag är självgående och trivs i mitt
        eget sällskap men tycker även om att samarbeta i grupp eller par.
        <br>
        <br>
        Just nu har jag mest kunskap inom HTML och CSS där jag kan forma innehållet på ett personligt sätt, det är även dom språken som jag känner mig mest hemma med och kan prestera bäst i. Utöver det så har jag en del grundläggande kunskaper som du kan läsa om här nedan.</h4>
    </div>

    <div class="whatsnext">
      <h2>Vad söker jag?</h2>

      <h4>Jag söker en nybörjarvänlig roll inom frontendutveckling, gärna med mest fokus på HTML eller CSS där jag antingen jobbar själv eller i par/team. <br><br>På arbetsplatsen får det gärna vara snälla och drivna programmerare/kodare med lagkänsla och möjligheten att hjälpa mig om det skulle behövas, iochmed att det är mitt första jobb som kodare.S</h4>
    </div>

    <div class="my-skills">
      <h2>Mina kunskaper</h2>

      <h4>Jag har som sagt gjort två utbildningar hos distansakademin där den första är en grundkurs och den andra en
        fördjupningskurs. Grundkursen innefattar grunderna för C#, html, css och javascript, men även hur man skapar
        webbsidor med projekttypen MVC och hur man sparar, hämtar och visar data ifrån användare i databasen MongoDB.
        <br>
        <br>
        Fördjupningskursen innefattar fördjupning i C#, html, css, javascript, hur man skapar och ansluter till
        SQL-databaser samt sparar hämtar och visar data, hur man använder .NET Core WebApi samt MVC, Hur man använder
        Node
        JS, Express JS och Vue JS, och slutligen hur man använder Entity framework.
      </h4>
    </div>



    <div class="certificatecontainer">
      <img alt="Certificate" src="../assets/Certificate1.png" class="certificates">
      <img alt="Certificate" src="../assets/Certificate1.png" class="certificates">
    </div>

  </div>

  <h5 class="footers">Skapad 2024-10-29 av Robin Nordling</h5>


</template>

<style>

* {
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: black;
}

.span-elements {
  display: grid;
  grid-template-columns: 55% 35%;
  gap: 7rem;
  padding-left: 100px;
}

.certificatecontainer {
  margin-right: auto;
}

.certificates {
  width: 250px;
  padding-left: 20px;
}

#mypicture {
  border: 2px solid black;
  border-radius: 20px;
  width: 400px;
  margin-right: auto;
}

body {
  background-color: rgb(185, 101, 62);
}

h5 {
  padding-top: 20px;
  padding-bottom: 5px;
  font-size: 25px;
  margin-bottom: 0;
}

h2 {
  font-size: 50px;
  text-align: center;
  margin-top: -10px;
}

.introduction {
  margin-left: auto;
  text-align: left;
  padding-left: 50px;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 1500px;
}

h4::first-letter {
  font-size: 300%;
  font-weight: bold;
  color: black;
}

#introduction::first-letter {
  font-size: 200%;
  color: black;
}


.about-me,
.my-skills {
  padding: 40px 40px;
  text-align: left;
  width: 97%;
  margin-left: auto;
  border: 2px solid black;
  background-color: rgb(221, 221, 221);;
  max-width: 1500px;
}

.whatsnext {
  width: 100%;
  text-align: left;
  padding: 40px 40px;
  border: 2px solid black;
  background-color: rgb(221, 221, 221);;
  max-width: 900px;
}

#introduction {
  font-size: 30px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-left: 40px;
  padding-bottom: 40px;
  padding-top: 30px;
  padding-right: 30px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 52px;
}

h4 {
  font-size: 25px;
  line-height: 32px;
  margin-bottom: 0px;
}

nav {
  padding-top: 10px;
  padding-bottom: 20px;
}

h1 {
  font-size: 75px;
  color: black;
  display: inline-block;
  border: 3px solid black;
  padding: 30px;
  margin-top: 30px;
  background-color: rgb(221, 221, 221);;
  margin-bottom: 70px;
}






@media (max-width: 1700px) {

  body {
    margin-right: 80px;
  }

  .span-elements {
    gap: 3rem;
    padding-left: 0;
    grid-template-columns: 61% 39%;
  }

  #mypicture {
    margin-left: 50px;
    margin-top: 50px;
  }

  .certificates {
    width: 250px;
    padding-left: 10px;
  }

  .introduction {
    margin-left: 0;
    margin-right: auto;
  }

  .about-me,
  .my-skills {
    padding: 40px 40px;
    text-align: left;
    width: 97%;
    margin-left: auto;
    border: 2px solid black;
    background-color: rgb(192, 192, 192);
  }

  .whatsnext {
    width: 100%;
    text-align: left;
    padding: 40px 40px;
    border: 2px solid black;
    background-color: rgb(192, 192, 192);
  }

  #introduction {
    font-size: 41px;
    color: black;
    gap: 5rem;
    text-align: left;
    padding-left: 50px;
  }

  h4 {
    font-size: 25px;
    line-height: 32px;
    margin-bottom: 0px;
  }

  nav {
    padding-top: 10px;
    padding-bottom: 20px;
  }

  h1 {
    padding-left: 200px;
    padding-right: 200px;
    margin-bottom: 40px;
  }
}






@media (max-width: 1300px) {

  * {
    width: 99%;
  }

  .span-elements {
    display: flex;
    flex-direction: column;
    gap: 100px;
  }


  .certificatecontainer {
    width: 80%;
    margin: auto;
    margin-bottom: 10px;
  }

  .certificates {
    width: 50%;
    padding-left: 50px;
  }

  h1 {
    text-align: center;
    padding: 0;
    margin-bottom: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 35px;
  }

  #mypicture {
    border: 4px solid black;
    width: 60%;
    margin: auto;
  }

  h2 {
    font-size: 55px;
    padding-top: 20px;
    text-align: center;
  }

  .about-me,
  .my-skills {
    padding: 20px 30px;
    border: 4px solid black;
  }

  .whatsnext {
    padding: 20px 30px;
    border: 4px solid black;
    width: 97%;
    max-width: 100%;
    margin-left: auto;
  }

  #introduction {
    font-size: 40px;
    line-height: 50px; 
  }

  h4 {
    font-size: 27px;
    line-height: 35px;
    margin: 0;
    padding: 0;
  }
}






@media (max-width: 900px) {

  * {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .span-elements {
    gap: 40px;
  }

  .certificatecontainer {
    width: 100%;
    margin-bottom: 10px;
  }

  .certificates {
    width: 50%;
    padding: 15px;
  }

  h1 {
    font-size: 35px;
    text-align: center;
    padding-right: 20px;
    padding-left: 20px;
    margin-bottom: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 25px;
  }

  #mypicture {
    border: 2px solid black;
    width: 60%;
    margin: auto;
    margin-top: 10px;
  }

  h2 {
    padding-top: 5px;
    font-size: 35px;
    text-align: center;
    margin-bottom: 20px;
  }

  .introduction {
    width: 100%;
    margin: auto;
    padding-right: 20px;
  }

  .about-me,
  .my-skills {
    padding: 20px 15px;
    border: 2px solid black;
    margin: auto;
  }

  .whatsnext {
    padding: 20px 15px;
    border: 2px solid black;
    width: 97%;
    margin: auto;
  }

  #introduction {
    font-size: 18px;
    padding: 15px;
    line-height: 23px;
    color: black;
    text-align: left;
  }

  h4 {
    font-size: 17px;
    line-height: 20px;
    margin: 0;
    padding: 0;
  }
}





@media (max-width: 450px) {

  h1 {
    font-size: 30px;
  }

  #mypicture {
    width: 85%;
  }

  .about-me,
  .my-skills {
    border: 2px solid black;
  }

  .whatsnext {
    border: 2px solid black;
  }

  #introduction {
    font-size: 22px;
    line-height: 25px;
    padding-left: 20px;
    margin: 0;
  }

  .introduction {
    margin: auto;
    padding-left: 25px;
    width: 100%;
  }

  h4 {
    font-size: 17px;
    line-height: 20px;
    margin: 0;
    padding: 0;
  }
}




@media (max-width: 380px) {
  h1 {
    font-size: 29px;
  }

  h4 {
    font-size: 16px;
    line-height: 22px;
  }

  .about-me,
  .my-skills {
    padding: 20px 7px;
    width: 99%;
    border: 1px solid black;
    margin: auto;
  }

  .whatsnext {
    padding: 20px 7px;
    border: 1px solid black;
    width: 99%;
    margin: auto;
  }

}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}

</script>
