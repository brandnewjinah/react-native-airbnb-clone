const io = require("socket.io")();

let currentUserID = 2;
let messageID = 1;
const userIDs = {};

const createdTime = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  let month = monthNames[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();
  let hour = date.getHours();
  let ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12;
  let minute = date.getMinutes();
  return (
    month + " " + day + " " + year + ", " + hour + ":" + minute + " " + ampm
  );
};

const createMessage = (userID, message) => {
  return {
    _id: messageID++,
    user_id: userID,
    createdAt: createdTime(),
    msg: message.msg,
  };
};

io.on("connection", (socket) => {
  userIDs[socket.id] = currentUserID++;
  socket.on("message", (message) => {
    console.log("messagetxt", message);
    const userID = userIDs[socket.id];
    console.log("currentUser", userID);
    const newMessage = createMessage(userID, message);
    console.log(newMessage);
    socket.broadcast.emit("message", newMessage);
  });
});

io.listen(3001);
