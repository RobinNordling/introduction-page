<template>

  <h1>Training journal</h1>

  <h3>Det här projektet är en träningsdagbok där du kan spara, redigera och ta bort enskilda övningar och hela
    träningspass. Den kan användas både för att studera och strukturera dina träningspass eller bara för att dokumentera
    och hålla koll på dina framsteg.</h3>

  <div class="container1">
    <div class="controller1">
      <img src="../../assets/TrainingJournal/ExerciseController1.png" class="imagemargin" id="topimage">
      <img src="../../assets/TrainingJournal/ExerciseController2.png">

      <div class="models">
        <img src="../../assets/TrainingJournal/Viewmodel.png" id="topimage">
        <img src="../../assets/TrainingJournal/SessionModel.png" height="276px" id="topimage">
      </div>

      <img src="../../assets/TrainingJournal/ExerciseModel.png" id="topimage" class="solomodel">

    </div>

    <div class="controller2">
      <img src="../../assets/TrainingJournal/SessionsController1.png" class="imagemargin" id="topimage">
      <img src="../../assets/TrainingJournal/SessionsController2.png" class="imagemargin">
      <img src="../../assets/TrainingJournal/SessionsController3.png">
    </div>

  </div>



  <div class="container2">

    <div class="leftcontainer">

      <h4 class="titles">Home index view</h4>
      <img src="../../assets/TrainingJournal/HomeIndex.png" id="homeindex" class="pagemargins">

      <h4 class="titles">Exercise index view</h4>
      <img src="../../assets/TrainingJournal/ExerciseIndex.png" class="pagemargins">

      <h4 class="titles">Sessions index view</h4>
      <img src="../../assets/TrainingJournal/SessionsIndex.png" class="pagemargins">

      <h4 class="titles">Edit exercise view</h4>
      <img src="../../assets/TrainingJournal/EditExercise.png" class="pagemargins">

      <h4 class="titles">Edit session view</h4>
      <img src="../../assets/TrainingJournal/EditSession.png" class="pagemargins">
    </div>

    <div class="rightcontainer">

      <h4 class="titles">Create exercise view</h4>
      <img src="../../assets/TrainingJournal/CreateExercise.png" class="pagemargins">

      <h4 class="titles">Create session view</h4>
      <img src="../../assets/TrainingJournal/CreateSession.png" class="pagemargins">

      <h4 class="titles">Show exercise view</h4>
      <img src="../../assets/TrainingJournal/ShowExercise.png" class="pagemargins">

      <h4 class="titles">Show session view</h4>
      <img src="../../assets/TrainingJournal/ShowSession.png" class="pagemargins">

    </div>

  </div>

  <div class="container3">

    <h4 class="titles2">Home page</h4>
    <img src="../../assets/TrainingJournal/Mainpage.png" class="pagemargins">

    <h4 class="titles2">Exercise index page</h4>
    <img src="../../assets/TrainingJournal/ExercisePage.png" class="pagemargins">

    <h4 class="titles2">Create exercise page</h4>
    <img src="../../assets/TrainingJournal/CreateExercisePage.png" class="pagemargins">

    <h4 class="titles2">Show exercise page</h4>
    <img src="../../assets/TrainingJournal/ShowExercisePage.png" class="pagemargins">

    <h4 class="titles2">Edit exercise page</h4>
    <img src="../../assets/TrainingJournal/EditExercisePage.png" class="pagemargins">
  </div>



</template>



<style scoped>
h1 {
  margin-bottom: -50px;
}

h3 {
  max-width: 1200px;
  font-size: 30px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-left: 30px;
  padding-bottom: 25px;
  padding-top: 20px;
  padding-right: 30px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: 100px;
  margin-bottom: 70px;
  line-height: 52px;
  margin-left: auto;
  margin-right: auto;
}

.titles {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 30px;
}

.titles2 {
  margin-top: 80px;
  font-size: 50px;
  margin-bottom: 30px;
}

.pagemargins {
  border-top: 1px solid black;
}

.rightcontainer {
  max-width: 613px;
}

.leftcontainer {
  max-width: 1040px;
}

.solomodel {
  margin-left: 337px;
  margin-top: 20px;
}

.models {
  display: flex;
  gap: 50px;
  margin-top: 50px;
  margin-left: -170px;
}

.imagemargin {
  margin-bottom: -5px;
}

#topimage {
  border-top: 1px solid black;
}

img {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.container1 {
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-bottom: 100px;
}

.container2 {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 150px;
}


.container3 {
  max-width: 1500px;
  margin: auto;
  margin-bottom: 200px;
}

.controller2 {
  max-width: 645px;
}

.controller1 {
  max-width: 596px;
}
</style>