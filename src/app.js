/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#excuses").innerHTML = generateExcuse();
  console.log("Hello little boy!");
};

let generateExcuse = () => {
  let subject = ["My dog", "The bus", "My bathroom", "My mom", "My girlfriend"];
  let verb = [
    "has eaten",
    "has puncture",
    "has broken",
    "told me that",
    "took my laptop"
  ];
  let complement = [
    "my homework",
    "so I'm late",
    "and I could'n go",
    "so I got confused by the date",
    "so I couldn't attend the meeting "
  ];
  let emoji = ["🥺", "😩", "😅", "😬", "😓"];

  let subjectInd = Math.floor(Math.random() * subject.length);
  let verbtInd = Math.floor(Math.random() * verb.length);
  let complementtInd = Math.floor(Math.random() * complement.length);
  let emojiInd = Math.floor(Math.random() * emoji.length);

  return (
    subject[subjectInd] +
    " " +
    verb[verbtInd] +
    " " +
    complement[complementtInd] +
    " " +
    emoji[emojiInd]
  );
};
