class DMmessage {
  constructor(person) {
    // console.log(person.messages);
    this.person = person;

    // This is an object, needs to run through a for()
    //it holds all the message a person has sent (and their meta-data)
    this.messages = person.messages;

    // Create a div and appends it to the document
    this.dmContainer = document.createElement("div");
    this.dmContainer.classList.add(`dm-container`);
    document.body.appendChild(this.dmContainer);

    console.log(this.person.name);
    this.dmContainer.innerHTML = this.person.name;
    // this.dmContainer.innerHTML = `${this.person.name}`;

    // Print the entire conversation with all the messages from one sender
    this.printConversation(this.messages, this.dmContainer);
  }

  printConversation(conversation, container) {
    // console.log(conversation);
    for (let item in conversation) {
      // Gives you every sender and every message in one DM
      console.log(conversation[item].from);
      console.log(conversation[item].message);
      // Create a paragraph and append it to the div
      this.para = document.createElement("p");
      container.appendChild(this.para);
      this.para.innerHTML = conversation[item].message;
    }
  }
}
