//construct a post request using fetch()
//fetch also can take a js object as the second argument
//The object can contain certain properties that can be used to change fetch default behaviour

//fetch(destinationURL, configurationObject)
//configurationObject contains three core components needed for standard POST requests
//The HTTP verb
//To tell fetch() that this is a POST request
//Add a method property to our configfurationOBject
const configurationObject = {
    method: "POST",
    //INCLUDE some metadata about the actual data we want to send
    //The metadata is in form of headers
    //Headers are sent just ahead of the actual data payload of our POST request
    // THey contain info about the data being sent
    //Common header is COntent-Type 
    //Used to indicate what format the data being sent is in
    headers:{
        //Each individual header is stored as a key/value pair inside an object
        //Content-Type tells the destination server what type of data we're sending
        //We use Accept to tell the server our data format

        "Content-Type": "application/json",
        Accept: "application/json",
    },
            //Data being sent in fetch() must be stored in the body of the configurationObject
            //When data is sent is exchanged between a client and server the data is sent as text
            //Whatever data we're assigning to the body of our request needsw to be a string
            //Using JSON.stringify() to convert objects to string

    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
    })

};
fetch('http://localhost:3000/dogs', configurationObject)
  .then(function (response){// A response object repreeesenting  what the destination server sent back to us      
    return response.json();// converting the body of the response fromJSON to a plain old js object
  })
  .then(function (object){
    console.log(object)
  })
  .catch(function (error){
    alert("Bad things! Ragnarok!");
    console.log(error.message)
  })
//The headers
//The body