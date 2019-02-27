
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var first = names[i].charAt(0).toLowerCase();

  if (first === 'j') 
    byeSpeaker.speak(names[i]);
  else 
    helloSpeaker.speak(names[i]);
  
}

function concatMap (input) {
  var first = input.charAt(0).toLowerCase();

  if (first === 'j') 
    return byeSpeaker.speakSimple(input);
  else
    return helloSpeaker.speakSimple(input);
  
}

var greetingArray = names.map(concatMap);

// The directions said to display the list twice, but werent clear as to how they should be printed. So I printed the entire array
console.log(greetingArray);

})();
