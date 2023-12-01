
//lien : https://github.com/ziishaned/learn-regex#28-anchors

// normal: "(T|t)he" => The car is parked in the garage.
const normal = /hi/;

// begin: "^(T|t)he" => The car is parked in the garage.
const begin = /^hi/;

// end: "(at\.)$" => The fat cat. sat. on the mat.
const end = /hi$/;

// beginEnd: exactement le meme
const beginEnd = /^hi$/;
