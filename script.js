
//onload set votes

let dogVotesTd = document.querySelector("#doggo-votes")
let dogVotes = localStorage.getItem('dogVotes');
if (dogVotes === null) {
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}
dogVotesTd.textContent = dogVotes;




let catVotes = 0;
let fishVotes = 0;

let totalVotesTd = document.querySelector("#total-votes");
totalVotesTd.textContent = dogVotes + catVotes + fishVotes;


// selectors for each individual animal div
let dogDiv = document.querySelector("#doggo");
let catDiv = document.querySelector("#catto");
let fishDiv = document.querySelector("#fish");


// created and append dog vote button
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = "Vote for Doggo";
dogDiv.append(dogVoteBtn);

dogVoteBtn.addEventListener('click', function(){
    dogVotes = dogVotes + 1;
    dogVotesTd.textContent = dogVotes;
    localStorage.setItem('dogVotes', dogVotes);

    totalVotesTd.textContent = dogVotes + catVotes + fishVotes;
})


// create dog vote (-) button
let SubdogVoteBtn = document.createElement("button")
SubdogVoteBtn.textContent = "REMOVE vote for Doggo"
dogDiv.append(SubdogVoteBtn)

SubdogVoteBtn.addEventListener('click', function(e) {
        dogVotes = dogVotes - 1;
        dogVotesTd.textContent = dogVotes;
        localStorage.setItem('dogVotes', dogVotes);
        
        totalVotesTd.textContent = dogVotes + catVotes + fishVotes
});




//created and append cat vote button
let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = "Vote for Catto";
catDiv.append(catVoteBtn);

catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    document.querySelector("#catto-votes").textContent = catVotes;

    totalVotesTd.textContent = dogVotes + catVotes + fishVotes;
})

//create and append fish vote button
let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = "Vote for fish";
fishDiv.append(fishVoteBtn);

