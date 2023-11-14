window.onload = () => {
  //Fetch the data from the json file and stores it in a key-value pair Object
  fetch("data/direct-messages.json")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      //  i is 1 item of the direct messages (people); acts like a for loop
      for (let person in data) {
        // i is the name of the contact
        // console.log(person);
        //Create all thumbnail containers for DM interface

        // console.log(data[person].messages);
        //  message is 1 item of all  messages one person has sent to Lorna
        // for (let message in data[person].messages) {
        // this is an example of how to fecth data (eg: who it is from)
        //   console.log(data[person].messages[message].from);
        //   console.log(data[person].messages[message].message);
        //   console.log(data[person].messages[message].attached_file_type);
        // }
        // Create a new DM message javascript object for every new person in the JSON file
        // console.log(data);
        // console.log(data[person]);

        // let allDmInterfaces = document.getElementsByClassName(
        //   "direct-message-container"
        // );

        // for (let interface in allDmInterfaces) {
        //   switch (allDmInterfaces[interface].getAttribute("id")) {
        //     case "direct-message-interface-container":
        //       break;
        //     case "direct-message-clara-container":
        //       break;
        //   }
        // }

        new DMmessage(data[person]);
      }
    })
    .catch((error) => console.error(error));
};
