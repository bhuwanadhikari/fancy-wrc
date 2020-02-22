  
function  Probability(rating1, rating2){
  
    return 1.0 * 1.0 / (1 + 1.0 * Math.pow(10, 1.0 * (rating1 - rating2) / 400)) 
}
  
// # Function to calculate Elo rating 
// # K is a constant. 
// # d determines whether 
// # Player A wins or Player B.  
function EloRating(Ra, Rb, K, d){   
    const konst = 24
    // # To calculate the Winning 
    // # Probability of Player B 
    const Pb = Probability(Ra, Rb) 
  
    // # To calculate the Winning 
    // # Probability of Player A 
    const Pa = Probability(Rb, Ra) 
  
    // # Case -1 When Player A wins 
    // # Updating the Elo Ratings 
    if (d == 1) {
        Ra = Ra + K * (1 - Pa) 
        Rb = Rb + K * (0 - Pb) 
    }
  
    // # Case -2 When Player B wins 
    // # Updating the Elo Ratings 
    else {
        Ra = Ra + konst * (0 - Pa) 
        Rb = Rb + konst * (1 - Pb) 
    }
  

    return {Ra, Rb}
}

export default EloRating;
  
// # Ra and Rb are current ELO ratings 
  