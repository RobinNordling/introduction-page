<template>

  <head>
    <meta charset="utf-8">
    <title>Survey Form</title>
    <link rel="stylesheet" href="styles.css">
  </head>

  <div class="container">

    <h1 id="title">Survey Form</h1>

    <fieldset>
      <p id="description">Thank you for your time. I appreciate your feedback.</p>
    </fieldset>

    <form id="survey-form">

      <fieldset>
        <h3>Enter your Name, Email and Phone number.</h3>

        <label id="name-label"> Name: <input id="name" type="text" placeholder="Magnus Bengtsson" required>
        </label>

        <label id="email-label"> Email: <input id="email" type="email" placeholder="Magnus@hotmail.com" required>
        </label>

        <label id="number-label"> Phone Number: <input id="number" type="number" min="10" max="10"
            placeholder="0850151288"></label>
      </fieldset>



      <fieldset>

        <h3>What programming languages do you use?</h3>
        <input type="checkbox" value="1" class="checkbox"> Javascript
        <input type="checkbox" value="2" class="checkbox"> HTML/CSS
        <input type="checkbox" value="3" class="checkbox"> Python
        <input type="checkbox" value="4" class="checkbox"> SQL
        <input type="checkbox" value="5" class="checkbox"> TypeScript
        <input type="checkbox" value="6" class="checkbox"> Shells
        <input type="checkbox" value="7" class="checkbox"> Java
        <input type="checkbox" value="8" class="checkbox"> C#
        <input type="checkbox" value="9" class="checkbox"> C++
        <input type="checkbox" value="10" class="checkbox"> C
        <input type="checkbox" value="11" class="checkbox"> PHP
        <input type="checkbox" value="12" class="checkbox"> PowerShell
        <input type="checkbox" value="13" class="checkbox"> Go
        <input type="checkbox" value="14" class="checkbox"> Rust

        <textarea id="area1" placeholder="Others..."></textarea>

        <h3 class="inline" id="topMargin">How many hours/day do you spend on programming? </h3>
        <select id="dropdown">
          <option>Select hours</option>
          <option>0-2 hours</option>
          <option>2-4 hours</option>
          <option>4-6 hours</option>
          <option>6-8 hours</option>
          <option>8-10 hours</option>
          <option>10+ hours</option>

        </select>
        <h3 id="topMargin">What do you consider the best quality/qualities for programming?</h3>

        <input type="checkbox" value="1" class="checkbox2"> Logical Thinking
        <input type="checkbox" value="2" class="checkbox2"> Quick Learning
        <input type="checkbox" value="3" class="checkbox2"> Persistency
        <input type="checkbox" value="4" class="checkbox2"> Problemsolving
        <input type="checkbox" value="5" class="checkbox2"> Flexibility
        <input type="checkbox" value="6" class="checkbox2" id="marginLeft"> Great Memory

      </fieldset>

      <fieldset>
        <h3>Would you recommend it to a friend?</h3>
        <div class="block">
          <input type="radio" name="thoughts" value="1"> Yes
          <input type="radio" name="thoughts" value="2"> Maybe
          <input type="radio" name="thoughts" value="3"> No
        </div>


        <textarea id="area2" placeholder="Give a short motivation..."></textarea>

        <button id="submit">Submit Form</button>
      </fieldset>

    </form>

  </div>

</template>

<style scoped>

.container {
  width: 650px;
  margin: auto;
  font-family: Monospace;
  margin-top: 40px;
  padding-bottom: 30px;
}

h3 {
  font-size: 16px;
  margin-top: 10px;
}

h1,
p {
  text-align: center;
}

p {
  font-size: 15px;
  margin-bottom: 0;
  ;
}

input {
  margin-bottom: 10px;
}

#topMargin {
  margin-top: 30px;
}

select {
  text-align: center;
  font-size: 17px;
  margin-left: 5px;
  padding: 1px;
}

#name {
  width: 120px;
}

#email {
  width: 170px;
}

#number {
  width: 90px;
}

fieldset {
  padding-bottom: 20px;
  margin-top: -2px;
  background: linear-gradient(90deg, lightyellow, rgb(180, 225, 180));
}

#area1 {
  margin-bottom: -15px;
  margin-left: 20px;
  padding-left: 4px;
}

#area2 {
  margin-left: 5px;
  height: 50px;
  margin-bottom: -9px;
  padding-left: 4px;
}

#submit {
  margin-left: 80px;
  padding: 3px;
  font-size: 15px;
  position: absolute;
  margin-top: 30px;
}

.inline {
  display: inline-block;
}

.checkbox {
  margin-right: -3px;
  margin-left: 10px;
}

.checkbox2 {
  margin-right: -3px;
  margin-left: 30px;
}

#marginLeft {
  margin-left: 66px;
}
</style>
