const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quotebtn = document.querySelector(".buttons button"); // Updated selector
const soundbtn = document.querySelector(".sound i"); // Updated selector
const copybtn = document.querySelector(".copy i"); // Updated selector
const twitterbtn = document.querySelector(".twitter i"); // Updated selector

function randomQuote() {
  quotebtn.classList.add("loading");
  quotebtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
 
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quotebtn.innerText = "New Quote";
      quotebtn.classList.remove("loading");
    });
}

soundbtn.addEventListener("click", () => {
    let utterance=new SpeechSynthesisUtterance (`${quoteText.innerText} by ${authorName.innerText}}`);
  
    speechSynthesis.speak(utterance);
});
copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerText} by ${authorName.innerText}}`);
});
twitterbtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} by ${authorName.innerText}}`;  
    window.open(tweetUrl,"_blank");
    
  });
quotebtn.addEventListener("click", randomQuote);
