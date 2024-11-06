let card="sbi";
amount=40000;

switch(true){
    case (amount>5000 && amount<10000):
        switch(card){
            case "hdfc":
                console.log(`discount is 10% that is ${amount*10/100} rupees and total bill is ${amount-(amount*10/100)} rupees `)
            break
            case "sbi":
                console.log(`discount is 5% that is ${amount*5/100} rupees and total bill is ${amount-(amount*5/100)} rupees`)
                break
            default:
                console.log("no discount for your card")       
        }
        break

    case (amount>=10000 && amount<15000):
        switch(card){
            case "hdfc":
                console.log(`discount is 20% that is ${amount*20/100} rupees and total bill is ${amount-(amount*20/100)} rupees `)
            break
            case "sbi":
                console.log(`discount is 10% that is ${amount*10/100} rupees and total bill is ${amount-(amount*10/100)} rupees`)
                break
            default:
                console.log("no discount for your card")       
        }
        break

    case (amount>=15000 && amount<25000):
        switch(card){
            case "hdfc":
                console.log(`discount is 30% that is ${amount*30/100} rupees and total bill is ${amount-(amount*30/100)} rupees `)
            break
            case "sbi":
                console.log(`discount is 20% that is ${amount*20/100} rupees and total bill is ${amount-(amount*20/100)} rupees`)
                break
            default:
                console.log("no discount for your card")       
        }
        break

    case (amount>=25000):
        switch(card){
            case "hdfc":
                console.log(`discount is 50% that is ${amount*50/100} rupees and total bill is ${amount-(amount*50/100)} rupees `)
            break
            case "sbi":
                console.log(`discount is 40% that is ${amount*40/100} rupees and total bill is ${amount-(amount*40/100)} rupees`)
                break
            default:
                console.log("no discount for your card")       
        }
        break

    default:
        console.log("minimum bill is 5000")
        
}
          // output:---  discount is 40% that is 16000 rupees and total bill is 24000 rupees





//Print the grades using switch case

marks=84;
switch(true){
    case (marks>=90):
        console.log(`${marks} marks and grade is A+`)
        break
    case (marks<90 && marks>=80):
        console.log(`${marks} marks and grade is A`)
        break
    case (marks<80 && marks>=70):
        console.log(`${marks} marks and grade is B+ `)
        break
    case (marks<70 && marks>=60):
        console.log(`${marks} marks and grade is B`)
        break
    case (marks<60 && marks>=50):
        console.log(`${marks} marks and grade is C`)
        break
    case (marks<50 && marks>=35):
        console.log(`${marks} marks and grade is D`)
        break
    default:
        console.log(`${marks} marks and grade is F better luck next time`)
}
       // output:---  84 marks and grade is A



// print the months using switch case

month=3;
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break 
    default:
        console.log("invalid month")
}
     // output:---- March