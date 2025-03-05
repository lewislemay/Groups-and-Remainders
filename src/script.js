numTotal = await input("Please input number: ");

if (numTotal > 0) {

numTotal = Number(numTotal);
numDivide = await input("Please input divided number: ");
numDivide = Number(numDivide);
numGroups = numTotal / numDivide;
output(numGroups);
numRemain = numTotal % numDivide;
output(numRemain);
}
else {
output("Invalid input. Please try again.");
}
