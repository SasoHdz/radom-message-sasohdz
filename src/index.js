const messages = [
    "Isaac",
    "Mariana",
    "Juan",
    "Diego",
    "Alma",
    "Juanito",
    "Uriel",
    "Marcos",
    "Miguel",
    "Mari"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };