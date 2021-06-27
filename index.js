/* use a 'for loop' to execute a piece of code for every item in an Array.

below i have ana Array that i am going to iterate through,k iteration is going to show the items in the array */

let theSportsIPlay = ["basketsball", "football", "tennis", "chess"]; 

// initialised the array in the 'for loop'  


/* varible i is value of 0, check if i is the overall sze of the Array by using 'length' property, the iteration goes on untill i becomes 4 and stops because 4 is NOT less than 4.

When the iterations ends the code block in the curley bracket will be exected

in each iteration i is incremented by 1 which means it will be , 0,1,2,3 we can access itams from their index.

*/




for (let i = 0; i < theSportsIPlay.length; i ++) {

  console.log (theSportsIPlay, theSportsIPlay[0], theSportsIPlay[3]);

  //to get the first item in the Array we can use: theSportsIPlay[0]

}
