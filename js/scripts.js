$(document).ready(function () {
  console.log("this is working")
  $("form#survey").submit(function(event) {
    console.log("this is also working")
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
      javaScript += 5;
    } else if (questionOne === "back-end") {
      java += 5;
      cSharp += 5;
      python += 5;
    }

    if (questionTwo === "money") {
      python += 4;
      java += 4;
    } else if (questionTwo === "fun") {
      javaScript += 4;
    } else if (questionTwo === "career-change") {
      cSharp += 4;
    }

    if (questionThree === "instagram") {
      python += 3;
    } else if (questionThree === "stack-overflow") {
      cSharp += 3;
    } else if (questionThree === "gmail") {
      java += 3;
    } else if (questionThree === "wikipedia") {
      javaScript += 3;
    }

    if (questionFour === "gryffindor") {
      cSharp += 2;
    } else if (questionFour === "hufflepuff") {
      python += 2;
    } else if (questionFour === "ravenclaw") {
      java += 2;
    } else if (questionFour === "slytherin") {
      javaScript += 2;
    }

    if (questionFive === "Yes") {
      java += 1;
      javaScript +=1;
    } else if (questionFive === "No") {
      python += 1;
      cSharp += 1;
    }


    event.preventDefault();
  });
});