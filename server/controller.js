module.exports = {
  getFortune: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A fresh start will put you on your way.",
      "A lifetime of happiness lies ahead of you.",
      "Allow compassion to guide your decisions.",
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getFeelings: (req, res) => {
    const feelings = [
      "Stay motivated, you got this!",
      "You are really killing it today",
      "Can I be like you when i grow up?",
      "LFGGGG!!!!",
    ];
    let randomIndex = Math.floor(Math.random() * feelings.length);
    let randomFeeling = feelings[randomIndex];

    res.status(200).send(randomFeeling);
  },

  createUser: (req, res) => {
    let users = [];
    const { firstName, lastName } = req.body;
    const user = { firstName, lastName };
    users.push(user);
    res.status(200).send("User created successfully.");
  },

  updateUser: (req, res) => {
    const { oldFirstName, oldLastName } = req.params;
    const { firstName, lastName } = req.body;
    const index = users.findIndex(
      (user) => user.firstName === oldFirstName && user.lastName === oldLastName
    );
    if (index >= 0) {
      users[index] = {
        firstName: firstName || oldFirstName,
        lastName: lastName || oldLastName,
      };
      res.status(200).send("User updated successfully");
    } else {
      res.status(404).send("User not found");
    }
  },

  deleteUser: (req, res) => {
    const { firstName: oldFirstName, lastName: oldLastName } = req.params;
    const index = users.findIndex(
      (user) => user.firstName === oldFirstName && user.lastName === oldLastName
    );
    if (index >= 0) {
      users.splice(index, 1);
      res
        .status(200)
        .send(`User ${oldFirstName} ${oldLastName} deleted successfully`);
    } else {
      res.status(404).send("User not found");
    }
  },
};
