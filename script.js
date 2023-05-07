const content = [
  { phrase: `2022/3/16

  ok ok ok
  To talk a little about this date
   that changed my life`
  , image: "1a.jpg" },

  { phrase: `I got to know my girl in a very strange way
  So if I tell you the story
  I bet none of you believe me
  But I will not list it now
  `, image: "2a.jpg" },


  { phrase: `Here we are
  We live the most beautiful love story
  I live it with you my girl
  My pearl is the girl 
  I loved the most in my life
  The girl with whom 
  I knew the true meaning of love
  `,image: "3a.jpg" },
  
  
  { phrase: `A very painful feeling
  when I think about it
  The topic is that we can't be together
  `, image: "4a.jpg" },
  
  
  
  { phrase: `We have come to a certain point
  When we imagine that we are holding hands
  or hugging each other
  We feel pain
  Because we don't actually do that
    And all these illusions
  The feeling that I am
    I'm not close to it, it kills me
  `, image: "7a.jpg" },
  
  
  
  { phrase: `But it's okay
  She knows she got me
    And now I'm obsessed with her
  Which means I will do anything
  in order to meet
  Look at her face and she knows this
  `, image: "6a.jpg" },
  
  
  { phrase: `my heart
  Oh my beauty
  I want you to know how much I love you
  And how I strive for you to be happy
  And that our relationship be as
   healthy as possible
  I'm trying to give you enough
  of love and attention
  Sorry if I ever wrong you
  And that made you sad
  You don't deserve this
   `, image: "9a.jpg" },

   { phrase: `Finally I would like to say something
   First my love:
   I hope you liked the simple site
   And everyone who entered this site
   I want you to wish us well and be together
   Because I really love her
   `, image: "10a.jpg" },

];

let currentIndex = 0;

function displayContent() {
  const currentContent = content[currentIndex];

  document.getElementById("randomText").innerText = currentContent.phrase;
  document.getElementById("randomImage").src = currentContent.image;

  currentIndex++;
  if (currentIndex === content.length) {
    currentIndex = 0;
  }
}

const button = document.getElementById("button");
button.addEventListener("click", displayContent);

displayContent(); // عرض المحتوى الأول عند تحميل الصفحة