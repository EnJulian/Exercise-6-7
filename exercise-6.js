function book() {
    let age = parseInt(prompt("Enter age: "));
    let movieType = prompt("Regular, 3D or IMAX? ")
    let ticketPrice = 0
    let seatSelection = confirm("Are you in as a VIP?")
    
    if (seatSelection === true) {
        ticketPrice += 5
    } else ticketPrice = 0;

    if (movieType === "Regular") {
        if (age < 12) {
            ticketPrice += 8;
            console.log(`Ticket price for children is $${ticketPrice}`);
        } else if (age >= 12 && age < 65) {
            ticketPrice += 12;
            console.log(`Ticket price for adults is $${ticketPrice}`);
        } else if (age >= 65) {
            ticketPrice += 10;
            console.log(`Ticket price for seniors is $${ticketPrice}`);
        }
        let result = alert(ticketPrice);
        return result;

    } else if (movieType === "3D") {

        if (age < 12) {
            ticketPrice += 10;
            console.log(`Ticket price for children is $${ticketPrice}`);
        } else if (age >= 12 && age < 65) {
            ticketPrice += 15;
            console.log(`Ticket price for adults is $${ticketPrice}`);
        } else if (age >= 65) {
            ticketPrice += 12;
            console.log(`Ticket price for seniors is $${ticketPrice}`);
        }
        let result = alert(ticketPrice);
        return result;

    } else if (movieType === "IMAX") {

        if (age < 12) {
            ticketPrice += 12;
            console.log(`Ticket price for children is $${ticketPrice}`);
        } else if (age >= 12 && age < 65) {
            ticketPrice += 18;
            console.log(`Ticket price for adults is $${ticketPrice}`);
        } else if (age >= 65) {
            ticketPrice += 15;
            console.log(`Ticket price for seniors is $${ticketPrice}`);
        }
        let result = alert(ticketPrice);
        return result;

    }
}
book();
