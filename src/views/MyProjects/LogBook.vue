<template>
  <h1>LogBook</h1>

  <div class="container1">

    <div class="models">
      <img src="../../assets/LogBook/EmployeeModel.png" class="Employeeimg">
      <img src="../../assets/LogBook/EmploymentModel.png">
    </div>

    <div>
      <h3>Det här projektet är en webbsida för att skapa, redigera och ta bort anställda och deras arbetsuppgifter. <br>Den
        hjälper dig att dokumentera och spara data för att hålla reda på dina anställda och vad dom har arbetat på.
      </h3>

      <img src="../../assets/LogBook/HomeController.png" height="469px">
    </div>
  </div>

  <div class="container2">

    <div class="controller1">
      <img src="../../assets/LogBook/EmployeeController1.png">
      <img src="../../assets/LogBook/EmployeeController2.png" class="image2">
    </div>

    <div class="controller2">
      <img src="../../assets/LogBook/EmploymentController1.png">
      <img src="../../assets/LogBook/EmploymentController2.png" class="controllerimages">
    </div>

  </div>

  <h4>Home index view</h4>
  <img src="../../assets/LogBook/HomeIndex.png">

  <div class="Pagescontainer">

    <div class="leftcontainer">
      <h4>Employee index view</h4>
      <img src="../../assets/LogBook/EmployeeIndex.png">

      <h4>Create employee view</h4>
      <img src="../../assets/LogBook/CreateEmployee.png">

      <h4>Show employee view</h4>
      <img src="../../assets/LogBook/ShowEmployee.png">

      <h4>Edit employee view</h4>
      <img src="../../assets/LogBook/EditEmployee.png">

    </div>

    <div class="rightcontainer">
      <h4>Employment index view</h4>
      <img src="../../assets/LogBook/EmploymentIndex.png">

      <h4>Create employment view</h4>
      <img src="../../assets/LogBook/CreateEmployment.png">


      <h4>Show employment view</h4>
      <img src="../../assets/LogBook/ShowEmployment.png">


      <h4>Edit employment view</h4>
      <img src="../../assets/LogBook/EditEmployment.png">
    </div>

  </div>

  <div class="pagecontainer">

    <div class="imageroof">
      <h2>Startsidan</h2>
      <p>Här välkomnar jag användaren och ger en kort beskrivning på vad man kan göra på sidan.</p>
    </div>

    <img src="../../assets/LogBook/HomeIndexPage.png" class="bigimages">

    <div class="imageroof">
      <h2>Anställda</h2>
      <p>Här visas alla anställda och här kan man antingen lägga till nya anställda eller visa en nuvarande anställd.
      </p>
    </div>

    <img src="../../assets/LogBook/EmployeeIndexPage.png" class="bigimages">

    <div class="imageroof">
      <h2>Lägg till anställd</h2>
      <p>Här kan man lägga till en anställd igenom att skriva in deras namn och födelseår och sedan trycka "Save".</p>
    </div>

    <img src="../../assets/LogBook/CreateEmployeePage.png" class="bigimages">

    <div class="imageroof">
      <h2>Visa anställd</h2>
      <p>Här kan man inspektera en anställd och se deras fullständiga namn och vilket år dom är födda. <br> Härifrån kan
        man även redigera eller ta bort den valda anställda.</p>
    </div>

    <img src="../../assets/LogBook/ShowEmployeePage.png" class="bigimages">

    <div class="imageroof">
      <h2>Redigera anställd</h2>
      <p>Här redigerar man den valda anställda igenom att ändra namnet eller födelseåret och trycka "Save".</p>
    </div>

    <img src="../../assets/LogBook/EditEmployeePage.png" class="bigimages">

    <div class="imageroof">
      <h2>Ta bort anställd</h2>
      <p>För att ta bort en anställd så går man in i vyn som visar en anställd och trycker på "Delete". Det finns ingen
        vy för att ta bort anställda vilket betyder att den anställda kommer tas bort så fort du trycker på "Delete
        employee" och
        sedan
        kommer du skickas till startsidan för anställda igen.</p>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="imageroof">
      <h2>Utfört arbete</h2>
      <p>Här visas namnet på alla anställda som har dokumenterat deras arbete.<br>Härifrån kan man lägga till eller
        visa utfört arbete.</p>
    </div>

    <img src="../../assets/LogBook/EmploymentIndexPage.png" class="bigimages">

    <div class="imageroof">
      <h2>Lägg till arbete</h2>
      <p>Här lägger man till ett arbete igenom att fylla i sitt namn,&nbsp;datum då arbetet genomfördes, <br>tiden som
        arbetet tog,&nbsp;och en beskrivning av arbetet.&nbsp;Slutligen så trycker man på "Save".</p>
    </div>

    <img src="../../assets/LogBook/CreateEmploymentPage.png" class="bigimages">

    <div class="imageroof">
      <h2>Visa utfört arbete</h2>
      <p>Här visas en persons utförda arbete i form av deras namn, arbetstid, datum och en beskrivning. <br>Härifrån kan
        man redigera eller ta bort arbetet.</p>
    </div>

    <img src="../../assets/LogBook/ShowEmploymentPage.png" class="bigimages">

    <div class="imageroof">
      <h2>Redigera arbete</h2>
      <p>Här kan man redigera arbetet igenom att ändra namn, datum, tid eller arbetsbeskrivning. <br>Sedan sparar man
        som vanligt igenom att trycka på "Save".</p>
    </div>

    <img src="../../assets/LogBook/EditEmploymentPage.png" class="bigimages">

    <div class="imageroof">
      <h2>Ta bort arbete</h2>
      <p>För att ta bort ett arbete så går man
        in i vyn som visar en anställds arbete och trycker på "Delete employment". Precis som för anställda så finns det ingen
        vy för att ta bort arbete så direkt efter du trycker på "Delete employment" så tas arbetet bort och du skickas till startsidan för arbeten</p>
    </div>
  </div>

</template>



<style scoped>
h1 {
  margin-bottom: 200px;
}

p {
  font-size: 30px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
}

.imageroof {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  border: 1px solid black;
  background-color: rgb(201, 201, 201);
  margin-bottom: 30px;
}

h2 {
  font-size: 55px;
  margin-bottom: 15px;
}

h4 {
  margin-top: 10px;
  margin-bottom: 5px;
  color: white;
}

img {
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
}

h3 {
  margin-top: -140px;
  max-width: 950px;
  max-width: 900px;
  font-size: 28px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-bottom: 25px;
  padding-top: 20px;
  padding-right: 30px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-bottom: 70px;
  line-height: 52px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
}

.bigimages {
  margin-bottom: 100px;
}

.models {
  max-width: 373px;
}

.controller1 {
  margin-left: -100px;
}

.controllerimages {
  margin-top: -36px;
  margin-left: -1px;
  border-top: none;
}

.image2 {
  margin-top: -36px;
  margin-left: -7px;
  border-top: none;
}

.pagecontainer {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1650px;
}

.Pagescontainer {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-bottom: 100px;
}

.container2 {
  max-width: 1830px;
  margin: auto;
  gap: 30px;
}

.container1 {
  display: flex;
  justify-content: center;
  gap: 120px;
  margin-right: 50px;
}
</style>