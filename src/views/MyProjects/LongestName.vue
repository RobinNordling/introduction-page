<template>
  <h1> Longest Name</h1>

  <h3>Den här konsollappen låter dig mata in två stycken namn och skriver sedan ut det längre namnet.</h3>

  <div class="container">

    <img src="../../assets/LongestName/image1.png" class="img1">

    <div class="imagebox">
      
      <img src="../../assets/LongestName/image2.png" class="right-images">
      <img src="../../assets/LongestName/image3.png" class="right-images">
      <img src="../../assets/LongestName/image4.png" class="right-images">
      
    </div>

  </div>

</template>

<style scoped>

h3{
  max-width: 900px;
  font-size: 32px;
  color: black;
  text-align: left;
  border: 2px solid black;
  padding-left: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 20px;
  background-color: rgb(221, 221, 221);;
  border-radius: 3px;
  margin-top: -20px;
  margin-bottom: 70px;
  line-height: 52px;
  margin-left: auto;
  margin-right: auto;
}

.right-images{
  padding: 5px;
  background-color: rgb(14, 14, 14);
  border: 2px solid black;
}

.img1{
  border: 2px solid black;
}

.container{
  display: flex;
  justify-content: center;
  gap: 50px;
}

.imagebox{
  display: flex;
  flex-direction: column;
  gap: 50px;
}

</style>