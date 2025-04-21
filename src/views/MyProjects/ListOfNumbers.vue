<template>
  <h1>List of numbers</h1>

  <h3>Det här programmet slumpar 10 olika tal mellan 1-50 och sparar dom i en lista. Sedan storleksordnas talen ifrån
    lägst till högst och skrivs sedan ut.</h3>

  <div class="container">

    <img src="../../assets/ListOfNumbers/image1.png" class="image1">

    <div class="box1">
      <p>Exempel 1</p>

      <img src="../../assets/ListOfNumbers/image2.png" class="images">
    </div>

    <div class="box2">
      <p>Exempel 2</p>

      <img src="../../assets/ListOfNumbers/image3.png" class="images">
    </div>

  </div>

</template>

<style scoped>

.box2{
  margin-left: -30px;
}

h3 {
  max-width: 1000px;
  font-size: 30px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-top: 15px;
  padding-right: 20px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: -20px;
  margin-bottom: 70px;
  line-height: 52px;
  margin-left: auto;
  margin-right: auto;
}

p {
  font-size: 19px;
  margin: 10px auto;
}

img {
  border: 2px solid black;
}

.images {
  padding: 5px;
  background-color: rgb(12, 12, 12);
  margin-right: 5px;
}

.container {
  display: flex;
  justify-content: center;
  gap: 60px;
}

</style>