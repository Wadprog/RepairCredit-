let generateBtn = document.getElementById("generate");

function print() {
  console.log("Why you clicked me");
  printJS({
    printable: "pdf-cover",
    type: "html",
    scanStyles: true,
    font: "roboto",
    honorColor: true,
    targetStyles: ["*"],
  });
}

generateBtn.addEventListener("click", print);
