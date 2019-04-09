var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// var vs let 

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
// So unlike var, when using let, a variable with the same name can only be declared once.
// Note the "use strict". This enables Strict Mode, which catches common coding mistakes and "unsafe" actions. For instance: