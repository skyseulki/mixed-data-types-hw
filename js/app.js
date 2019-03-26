console.log("Week 2 - Monday HW");

// 1 Data types
// a light switch that can be either on or off
/// boolean
// => const lightSwitch = ();
// if (lightSwitch === on) {
// => console.log("Switch on!") }

// a user's email address
/// array
/// const user = ("user@me.com")

// a spaceship with a hull, laser blasters, tracotr beams, and warp drive
/// objects 
/// const spaceship ={
//     hull: 2
//     laser blasters; 1
// }

// a list of student names from our class
/// objects of arrays

// a list of student names from our class, each with a location
/// objects with arrays

// list of student names from our class, each with a location and each with a list of favorite tv shows
/// objects with arrays and strings for tv shows


// 2 Take it easy
const rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];

/// write code that will access "blue" from the rainbow array
rainbow[4];

/// write obj that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype
const sky = {
    favoriteFood: "tacos",
    hobby: "yoga",
    location: "Alhambra",
    favoriteDatatype: "object"
}
/// write a code that will access your hobby from the object that you just created
sky.hobby;


// Crazy object
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
}

/// use crazyObject to log the following
// "omg my mouth is burning"
crazyObject.taco[1].salsa[5];
// "Pretty pretty prettayyyyy good"
crazyObject.larry["quotes"][0];
// "Swearing at Larry and Jeff"
crazyObject.larry.characters[2].favourtieHobby;
// "Chicken Teriyaki Boyyyyyy"
crazyObject.larry["nicknames"][1];
// The object the contains the name funkhauser
crazyObject.larry.characters[1].name;


// 4 Object-ception
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
}
// change "Joseph Gordon Levitt" to 'null'
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;