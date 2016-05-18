//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      //You use this to not tie it down to one object. Ex: if you have a method that returns the firstname of user1 object
      //then you would use this so you could do it multiply times and it isn't just for the user1 object

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
  //  Implicit Binding - calls whatever is left of the dot at call time
  //  Explicit Binding - the first arguement passed in should be the object
  //  Window/default Binding - attaching "this" to the global scope; this will open up all the variables stored in the DOM
  //  New and prototype Binding - this is great to start new objects with the same properties

  // 3) What is the difference between call and apply?

      //Answer
      // You can use arrays in the parameters with .apply but when using .call, you can't

  // 4) What does .bind do?

      //Answer
      // it creates a new function with the same body as the original, this is referred to the passed in object


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'yoyodog',
      email: 'yodog@doggy.com',
      getUsername: function () {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function () {
    return this.move += 10;
  }
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

//SPEC RUNNER IS ALL GREEN AT THIS POINT!!!

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
