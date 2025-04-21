<template>

  <h1>Guess the number</h1>

  <h3>Den här konsollappen är ett simpelt spel som slumpar ett tal mellan 1-100 och låter en sedan gissa på ett tal tills man har gissat rätt.
    Efter varje gissning svarar konsollen om svaret är för högt eller lågt. När du har gissat rätt så klarar du spelet och konsollen frågar om du vill spela igen. Svarar du "yes" på frågan så startas spelet om med ett nytt slumpat tal. </h3>

  <div class="container">
    <img src="../../assets/GuessTheNumber/image1.png" id="left-image">

    <div class="right-images">
      <img src="../../assets/GuessTheNumber/image2.png">
      <img src="../../assets/GuessTheNumber/image3.png">
      <img src="../../assets/GuessTheNumber/image4.png">
      <img src="../../assets/GuessTheNumber/image5.png">
      <img src="../../assets/GuessTheNumber/image6.png">
    </div>
  </div>

</template>


<style scoped>

img{
  border: 2px solid black;
}

h3{
  max-width: 1200px;
  font-size: 28px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-left: 40px;
  padding-bottom: 40px;
  padding-top: 30px;
  padding-right: 30px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: -20px;
  margin-bottom: 70px;
  line-height: 50px;
  margin-left: auto;
  margin-right: auto;
}

.right-images {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-left: 70px;
}

.container {
  display: flex;
  justify-content: center;
}
</style>