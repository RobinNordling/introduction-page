<template>

  <h1>APIBlog</h1>

  <div class="container1">
    <img src="../../assets/APIBlog/BlogClass.png" class="model">

    <h3>Det här projektet är en webbsida för blogginlägg som är skapad med hjälp av en API Controller och MongoDB
      databas. På webbsidan har du möjligheten att skapa, redigera, och ta bort blogginlägg och även inspektera alla
      eller enskilda inlägg. </h3>

  </div>

  <div class="container2">
    <div class="controller">

      <img src="../../assets/APIBlog/Controller1.png" class="controller1">
      <div class="emptydiv1"></div>
      <img src="../../assets/APIBlog/Controller2.png" class="controller2">
    </div>

    <img src="../../assets/APIBlog/ViewModel.png" class="viewmodel">

    <div class="database">

      <img src="../../assets/APIBlog/Database1.png" class="database1">
      <div class="emptydiv2"></div>
      <img src="../../assets/APIBlog/Database2.png" class="database2">
    </div>
  </div>




  <div class="bigcontainer">

    <div class="firstbox" id="greenborder">
      <img src="../../assets/APIBlog/MainPage.png" class="allsideborder" id="mainpage">
      <div class="lastbox">Så här ser startsidan ut och här används fem olika funktioner för att hantera hela sidan.
      </div>
    </div>

    <div class="firstbox" id="blueborder">

      <img src="../../assets/APIBlog/Showposts1.png">
      <div class="textbox2">1. Den här funktionen används för att visa alla befintliga inlägg.&nbsp;Det gör du igenom
        att klicka på länken.</div>

      <img src="../../assets/APIBlog/showposts2.png">
      <div class="textbox2">2. Efter det visas den här vyn och då trycker du på "Try it out" knappen.</div>

      <img src="../../assets/APIBlog/showposts3.png">
      <div class="textbox2">3. Då visas dom här två knapparna och där trycker du på "Execute" knappen för att köra
        funktionen.</div>

      <img src="../../assets/APIBlog/showposts4.png">
      <div class="textbox2">4. Då får du ett svar ifrån programmet och i det här fallet är det en tom lista eftersom vi
        inte har skapat något inlägg än.</div>

      <img src="../../assets/APIBlog/doneposts.png">
      <div class="lastbox">5. Annars så ser det ut såhär där varje inlägg har en
        titel,&nbsp;sammanfattning,&nbsp;innehåll alltså brödtext och även ett id som sätts automatiskt och vars syfte
        är att inlägget ska kunna spåras och hittas.</div>
    </div>

    <div class="firstbox" id="greenborder">
      <img src="../../assets/APIBlog/addpost1.png">
      <div class="textbox2">1. Den här funktionen används för att skapa nya inlägg och precis som förut så börjar du med
        att klicka på länken.</div>

      <img src="../../assets/APIBlog/addpost2.png">
      <div class="textbox2">2. Då dyker den här vyn upp och här behöver du återigen trycka på "Try it out" knappen.
      </div>

      <img src="../../assets/APIBlog/addpost3.png">
      <div class="lastbox">3. Därefter så matar du in en titel,&nbsp;sammanfattning och fyller på med brödtext.&nbsp;När
        du är klar trycker på "Execute" för att skapa inlägget.</div>
    </div>

    <div class="firstbox" id="blueborder">
      <img src="../../assets/APIBlog/showsinglepost1.png">
      <div class="textbox2">1. Den här funktionen används för att visa ett enskilt inlägg.&nbsp;För att göra det behöver
        du kopiera id:t ifrån det inlägget du vill visa,&nbsp; det kan du göra ifrån första funktionen som visar alla
        inlägg.&nbsp;När det är gjort så trycker du som vanligt på länken.</div>

      <img src="../../assets/APIBlog/showsinglepost2.png">
      <div class="textbox2">2. Efter det så trycker du på "Try it out".</div>

      <img src="../../assets/APIBlog/showsinglepost3.png">
      <div class="textbox2">3. Därefter kan du klistra in id:t som du kopierade och trycka på "Execute".</div>

      <img src="../../assets/APIBlog/showsinglepost4.png">
      <div class="lastbox">4. Då visas endast ditt valda inlägg såhär.</div>

    </div>

    <div class="firstbox" id="redborder">
      <img src="../../assets/APIBlog/deletepost1.png">
      <div class="textbox2">1. Den här funktionen används för att ta bort enskilda inlägg och kräver därför ett
        id.&nbsp;När du har kopierat ett så trycker du på länken. </div>

      <img src="../../assets/APIBlog/deletepost2.png">
      <div class="textbox2">2. Sedan trycker du på "Try it out".</div>

      <img src="../../assets/APIBlog/deletepost3.png">
      <div class="lastbox">3. Efter det klistrar du in id:t och trycker på "Execute" för att ta bort inlägget.</div>
    </div>

    <div class="firstbox" id="orangeborder">
      <img src="../../assets/APIBlog/editpost1.png">
      <div class="textbox2">1. Den här funktionen används för att ändra titeln på enskilda inlägg och för att göra det
        så krävs återigen ett id.&nbsp;När du har kopierat ett id så trycker du på länken.</div>

      <img src="../../assets/APIBlog/editpost2.png">
      <div class="textbox2">2. Sen trycker du på "Try it out".</div>

      <img src="../../assets/APIBlog/editpost3.png">
      <div class="textbox2">3. Sedan klistrar du in id:t och ändrar titeln. Därefter trycker du på "Execute".</div>

      <img src="../../assets/APIBlog/editpost4.png">
      <div class="lastbox">4. Nu kan du använda den tredje funktionen direkt efter för att klistra in samma id och inspektera det ändrade inlägget direkt.</div>
    </div>

  </div>



</template>

<style scoped>
p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#mainpage {
  max-width: 1420px;
}

#blueborder {
  border: 5px solid rgb(68, 149, 255);
}

#greenborder {
  border: 5px solid rgb(64, 224, 163);
}

#redborder {
  border: 5px solid rgb(255, 78, 78);
}

#orangeborder {
  border: 5px solid rgb(255, 166, 0)
}

.bigcontainer {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.lastbox {
  text-align: left;
  padding: 10px;
  font-size: 25px;
}

.textbox2 {
  text-align: left;
  margin-bottom: 40px;
  padding: 10px;
  font-size: 25px;
}

.firstbox {
  max-width: 1560px;
  margin: auto;
  padding-top: 50px;
  padding-left: 65px;
  padding-right: 70px;
  padding-bottom: 10px;
  background-color: rgb(170, 170, 170);
}

* {
  box-sizing: border-box;
}

h3 {
  max-width: 1200px;
  margin-right: 60px;
  max-width: 1200px;
  font-size: 30px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 30px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: 0;
  margin-bottom: 70px;
  line-height: 52px;
  padding-left: 30px;
}

.model {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  max-width: 367px;
  max-height: 275px;
  margin-bottom: 30px;
  margin-right: 90px;
  margin-left: -78px;
  margin-top: 10px;
}

.viewmodel {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  max-width: 446px;
  max-height: 514px;
  padding-top: 5px;
  background-color: rgb(34, 34, 34);
}

.database1 {
  margin-bottom: -5px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.database2 {
  padding-right: 18px;
  background-color: rgb(30, 30, 30);
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.controller1 {
  padding-top: 10px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  background-color: rgb(30, 30, 30);
  margin-bottom: -5px;
}

.controller2 {
  padding-left: 6px;
  background-color: rgb(30, 30, 30);
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  margin-left: 1px;
}

.emptydiv1 {
  position: absolute;
  border-bottom: 1px solid black;
  width: 217px;
  margin-left: 529px;
  height: 1px;
  margin-bottom: 1px;
}

.emptydiv2 {
  position: absolute;
  border-bottom: 1px solid black;
  width: 49px;
  margin-left: 656px;
  height: 1px;
  margin-bottom: 1px;
}

.controller {
  max-width: 530px;
}

.database {
  max-width: 657px;
}

.container2 {
  margin-right: 90px;
  gap: 40px;
  display: flex;
  justify-content: center;
}

.container1 {
  justify-content: center;
  display: flex;
  margin-top: -30px
}
</style>