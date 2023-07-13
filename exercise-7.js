// function sub() {
//    
    let basicAmt = 10;
    let standardAmt = 15;
    let premiumAmt = 20;
    let personalTrainerAmt = 5;
    let mealPlanAmt = 8;
    let selectedPlan ="premium";
    let personalTrainer = true;
    let mealPlan = true;
    let subscription = 0;

    switch (selectedPlan) {
        case "basic":
            (subscription += basicAmt);
            break;
        case "standard":
            (subscription += standardAmt);
            break;
        case "premium":
            (subscription += premiumAmt);
            break;
            
            // let result = alert(subscription);
            // return result;
    }
    if (personalTrainer === true) {
        subscription += personalTrainerAmt;
        // let result = alert(subscription);
        // return result;
    }
    if (mealPlan === true) {
        subscription += mealPlanAmt;
        // let result = alert(subscription);
        // return result;
    }
    if (personalTrainer === true && mealPlan === true) {
        subscription -= 3;
        // let result = alert(`Total Subscription cost is ${subscription}`);
        // return result;
    }
    
    console.log(`Your monthly subscription cost is: ${subscription}`);
    
// }
//
// sub();
