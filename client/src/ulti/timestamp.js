// This function is expecting a string of the date and time the message was sent and the current date and time
// receive format Mar 13th, 2024 at 2:39 am date
// currentArray format ['April', '3,', '2024', '6:41', 'AM']



export default function timeStampSmart(received, currentArray){
    // date
    let sentYear = parseInt(received.split(" ")[2]);
    const sentDate = parseInt(received.split(" ")[1].split('t')[0]); // 12
    let sentMonth = monthToInt(received.split(" ")[0]); // 3
    let sentHour = parseInt(received.split(" ")[4].split(':')[0]); // 2
    let sentTime = received.split(" ")[5] // am
    let sentMin = parseInt(received.split(" ")[4].split(':')[1]); // 39

    const currentDate = parseInt(currentArray[1]);
    let currentMonth = monthToInt(currentArray[0].slice(0,3))
    let currentTime = currentArray[4].toLowerCase();
    let currentHour = parseInt(currentArray[3].split(":")[0])
    let currentMin = currentArray[3].split(":")[1]

    


    if (currentDate === sentDate && currentMonth === sentMonth && currentHour === sentHour && currentTime === sentTime) {
        return `Received ${currentMin - sentMin}  Minutes ago`;
      }
      else if (currentDate === sentDate && currentMonth === sentMonth && currentHour !== sentHour )  {
        return `Received ${currentHour - sentHour} Hours ago`;
      }
      else if(currentDate - sentDate === 1 && currentTime !==  sentTime && currentMonth === sentMonth){
        let  diff = 12 - sentHour + currentHour;
        return " Received  " + diff + " Hours ago"
      }
      else if(currentDate - sentDate === 1 && currentTime ===  sentTime && currentMonth === sentMonth ){
        if(currentTime === 'am' && sentHour > currentHour ){
            console.log("This is AM and the sent hour is less than the current hour");

            console.log(received);
            console.log(currentArray.toString());
            return " Received " + (24 - (sentHour - currentHour)) + " Hours ago"
        }
        if(currentTime === 'pm' && sentHour < currentHour ){
            return " Received " + (24 - (sentHour - currentHour)) + " Hours ago"

            console.log("This is PM and the sent hour is less than the current hour");
            console.log(received);
            console.log(currentArray.toString());
        }
       
    }
      // // Return a default value (e.g., 0) if the conditions are not met
      return received;

}



function monthToInt(sentMonth){
    switch (sentMonth) {
      case 'Jan':
        sentMonth = 1
        break;
      case 'Feb':
        sentMonth = 2
        break;
      case 'Mar':
        sentMonth = 3
        break;
      case 'Apr':
        sentMonth = 4
        break;
      case 'May':
        sentMonth = 5
        break;
      case 'Jun':
        sentMonth = 6
        break;
      case 'Jul':
        sentMonth = 7
        break;
      case 'Aug':
        sentMonth = 8
        break;
      case 'Sep':
        sentMonth = 9
        break;
      case 'Oct':
        sentMonth = 10
        break;
      case 'Nov':
        sentMonth = 11
        break;
      case 'Dec':
        sentMonth = 12
        break;
    }
    return sentMonth;
  }