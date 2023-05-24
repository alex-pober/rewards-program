export function calculateRewards(arrayOfAmounts) {
  let totalPoints = 0;

  for (let i = 0; i < arrayOfAmounts.length; i++) {
    const amount = arrayOfAmounts[i];

    if (amount > 100) {
      totalPoints += (amount - 100) * 2;
      totalPoints += 50; // Additional 50 points for spending between $50 and $100
    } else if (amount > 50) {
      totalPoints += (amount - 50);
    }
  }

  return " " + totalPoints.toFixed(2);
}
