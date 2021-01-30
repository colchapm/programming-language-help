$(document).ready(function () {
  $("form#survey").submit(function(event) {
    const questionOne = $("input:radio[name=field]:checked").val();
    const questionTwo = $("input:radio[name=reason]:checked").val();
    const questionThree = $("input:radio[name=favorite-website]:checked").val();
    const questionFour = $("input:radio[name=hogwarts]:checked").val();
    const questionFive = $("#sandwich").val();

    let javaScript = parseInt(0)
    let java = parseInt(0)
    let cSharp = parseInt(0)
    let python = parseInt(0)

    if (questionOne === "front-end") {
      javaScript += 1;
    } else if (questionOne === "back-end") {
      java += 1;
      cSharp += 1;
      python += 1;
    }

    if (questionTwo === "money") {
      python += 1;
      java += 1;
    } else if (questionTwo === "fun") {
      javaScript += 1;
    } else if (questionThree === "career-change") {
      cSharp += 1;
    }











    event.preventDefault();
  })
})