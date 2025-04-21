<template>

  <h1>Fizzbuzz</h1>

  <h3>Det här programmet skriver alla tal från 1-100 men om talet är delbart med 5 så skriver programmet istället
    "Buzz", om talet är delbart med 3 skriver programmet istället "Fizz", och om talet är delbart med både 5 och 3 så
    skriver programmet "FizzBuzz". </h3>

  <img src="../../assets/FizzBuzz/image1.png">

  <div class="container">

    <div class="box">

      <p>1.</p>

      <img src="../../assets/FizzBuzz/image2.png">
    </div>

    <div class="box">

      <p>2.</p>

      <img src="../../assets/FizzBuzz/image3.png">
    </div>

    <div class="box">

      <p>3.</p>

      <img src="../../assets/FizzBuzz/image4.png">
    </div>

    <div class="box">

      <p>4.</p>

      <img src="../../assets/FizzBuzz/image5.png">
    </div>

    <div class="box">

      <p>5.</p>

      <img src="../../assets/FizzBuzz/image6.png">
    </div>

  </div>


</template>

<style scoped>

img{
  border: 2px solid black;
}

p{
  font-size: 20px;
  line-height: 8px;
}

h3{
  max-width: 1030px;
  font-size: 28px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-top: 20px;
  padding-right: 30px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: -20px;
  margin-bottom: 70px;
  line-height: 52px;
  margin-left: auto;
  margin-right: auto;
}

.container{
  justify-content: center;
  display: flex;
  gap: 70px;
}

</style>