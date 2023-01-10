const request = require("request");
const nodeCron = require("node-cron");
const webhookUrl = require("./secret-variable");
const dateFunction = require("./date");

const TH_MONTH = new Array(
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม"
);


// const cronJob = nodeCron.schedule("1 0 0-23/3 * * *", () => {
//   console.log("3 hrs: " + new Date().toLocaleString());
// });

nodeCron.schedule("0 0-23/3 * * *", () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  var message = '';
  message += ":white_small_square::white_small_square::white_small_square::white_small_square::white_small_square: ";
  message +=
    "วันที่ " + dateFunction(day) + " " + TH_MONTH[month] + " " + (0 + year + 543) +
    " เวลา " + dateFunction(hours) + ":" + dateFunction(minutes) + ":" + dateFunction(seconds) + " น. ";
  message += ":white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:";

  const options = {
    method: "POST",
    url: webhookUrl,
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      content: message
    },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log(error);
    }
  });
});

// nodeCron.schedule("*/1 * * * *", () => {
//   let date = new Date();
//   let day = date.getDate();
//   let month = date.getMonth();
//   let year = date.getFullYear();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   var message = '';
//   message += ":white_small_square::white_small_square::white_small_square::white_small_square::white_small_square: ";
//   message +=
//     "วันที่ " + dateFunction(day) + " " + TH_MONTH[month] + " " + (0 + year + 543) +
//     " เวลา " + dateFunction(hours) + ":" + dateFunction(minutes) + ":" + dateFunction(seconds) + " น. ";
//   message += ":white_small_square::white_small_square::white_small_square::white_small_square::white_small_square:";

//   const options = {
//     method: "POST",
//     url: webhookUrl,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: {
//       content: message
//     },
//     json: true,
//   };

//   request(options, (error, response, body) => {
//     if (error) {
//       console.log(error);
//     }
//   });
// });