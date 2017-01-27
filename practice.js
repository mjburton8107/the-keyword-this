//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer: the 'this' keyword is like a pronoun that points to the object values we want when using 'this'

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer: implicit is when the value to the left of the dot determines what 'this' refers to
      // explicit is call, bind and apply --> which explicit says what 'this' is referring to
      // new is referring to constructor functions and the 'this' keyword refers to the 'new' object you're creating with your constructor
      // default is the window object / global

  // 3) What is the difference between call and apply?

      //Answer call and apply both explicity assign 'this' to the first object in the parentheses; but apply passes in parameters as an array

  // 4) What does .bind do?

      //Answer it binds a specific function to an object to use with 'this'; but it doesn't call that function right away


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'mike',
      email: 'burton@gmail.com',
      getUsername: function(){
        return this.username
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
var Car = function(name, model, year, move){
  this.name = name;
  this.model = model;
  this.year = year;
  this.move = move;
  this.moveCar = function(){
    return this.move + 10;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here --> the global username if there is one; else it will return undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here --> the default window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
