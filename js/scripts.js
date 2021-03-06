$(document).ready(function() {

  const sentence = $('#sentenceButton'),
    paragraph = $('#paragraphButton'),
    displayText = $('.displayIpsumText'),
    displayButtons = $('.textDisplayButtons'),
    copy = $('#copyButton'),
    back = $('#backButton'),
    words = $('#words');

  function showText() {
    sentence.toggleClass('hide');
    paragraph.toggleClass('hide');
    displayText.removeClass('hide');
    displayButtons.removeClass('hide');
  }

  function reset() {
    sentence.toggleClass('hide');
    paragraph.toggleClass('hide');
    displayText.addClass('hide');
    displayButtons.addClass('hide');
    $('#copyButton').text("Copy Text");
  }

  function generateParagraph() {
    let randomIndices = [];
    let rickLinesParagraph = "";

    while (randomIndices.length < 6) {
      const random = Math.floor(Math.random() * rickLinesArray.length);

      if (!randomIndices.includes(random)) {
        randomIndices.push(random)
      }
    }
    for (let i = 0; i < randomIndices.length; i++) {
      rickLinesParagraph += rickLinesArray[randomIndices[i]] + " ";
    }
    return rickLinesParagraph;
  };

  ///////////////////////////////////////////////

  // Clipboard.js
  // on click of the copy button, copy text on to clipboard

  const clipboard = new Clipboard('#copyButton');
  clipboard.on('success', function(e) {
    console.log(e);
    $('#copyButton').text("TEXT COPIED")
  });
  clipboard.on('error', function(e) {
    console.log(e);
  });

  ///////////////////////////////////////////////////

  const rickLinesArray = [
    "Break the cycle, Morty. Rise above. Focus on science.",
    "I dunno, some people would pay top dollar for that kind of breakthrough.",
    "I turned myself into a pickle. I'm Pickle Riiiiick.",
    "Wow, I really Cronenberged up the whole place, huh Morty? Just a bunch a Cronenbergs walkin' around.",
    "Wubba lubba dub dub!",
    "I mean, it's not a place for smart people, Jerry. I know that's not a poular opinion, but that's my two cents on the issue.",
    "It's about to get a whole lot weirder, Morty.",
    "This is insane! Spleen mountain? Bladder Falls? Pirates of the Pancreas?",
    "I'm sorry, but your opinion means very little to me.",
    "Sometimes science is more art than science, Morty.",
    "It goes without saying that the Rickiest Rick would have the Mortiest Morty.",
    "To get riggedy riggedy WRECKED, son!",
    "Ugh, who invited Abradolf Linker?",
    "That's the difference between you and me, Morty. I never go back to the carpet store.",
    "It's time to get schwifty in here.",
    "It's like The Purge, Morty! You know that movie The Purge? They're peaceful, and then, you know. They just... purge.",
    "I'm not the nicest guy in the world, because I'm the smartest, and being nice is something stupid people do to hedge their bets.",
    "In 1998, they had this promotion for the Disney film Mulan where they created a new sauce for the McNuggets called Szechuan sauce, and it's delicious!",
    "Nine more seasons until I get that dipping Szechuan sauce.",
    "I refuse to answer a literal call to adventure, Morty.",
    "Even my grandson... I mean, he's a moron, that's their demographic. But you're different, Noob Noob.",
    "Come home to the simple flavor of your own impossible completion. Come home to Simple Rick's."
  ];

  const mortyLinesArray = [
    "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV. ",
    "I mean, why would a Pop-Tart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live. You know what I mean?",
    "Oh, haha, Summer... first race war?",
    "That just sounds like slavery with extra steps.",
    "Same old story. Just Morty's killing Morty's.",
    "You shouldn't take things for granite.",
    "Yeah, well, scientifically, traditions are an idiot thing.",
    "If you think my Rick's dead, he's alive. And if you think you're safe, he's coming for you.",
    "What’s wrong Rick? Is it the quantum carburetor or something?",
    "On one of our adventures, Rick and I basically destroyed the whole world.",
    "You’re a monster. You’re like Hitler but even Hitler cared about Germany or something!"
  ];

  ///////////////////////////////////////////////////

  paragraph.click(function() {
    showText();
    words.html(generateParagraph());
  });

  sentence.click(function() {
    showText();
    let num = Math.floor(Math.random() * mortyLinesArray.length);
    words.html(mortyLinesArray[num]);
  });

  back.click(function() {
    reset();
  });

});
