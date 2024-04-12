function splitAndSort() {
  var sentence = document.getElementById("sentence").value;

  if (sentence === "") {
    alert("No sentence entered!");
    return;
  }

  var words = sentence.split(/\s+/);

  words.sort();

  var sortedWords = "Sorted words: \n " + words.join(" \n ");
  var wordCount = "There are " + words.length + " words.";

  document.getElementById("sortedWords").innerText = sortedWords;
  document.getElementById("wordCount").innerText = wordCount;

  alert(sentence);
}
