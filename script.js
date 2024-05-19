function ella_merge() {
  // https://www.geeksforgeeks.org/how-to-change-the-id-of-element-using-javascript/
  document.getElementById("ella_mother").id = "ella_mother_merge";
  document.getElementById("ella_daughter").id = "ella_daughter_merge";
  document.getElementById("ella_grandma").id = "ella_grandma_merge";
  document.getElementById("ella_merge_link").id = "ella_you_link";
  
  document.getElementById("ella_you_link").outerHTML = '<a class="brown" id="ella_merge_link" href="all_you.html">Ella</a>'
  document.getElementById("ella_mother_merge").innerHTML = '<img class="mother" src="https://cdn.glitch.global/0a36e597-521e-4147-a59c-215cce2d2f41/mother.png?v=1709228283061"><button class="char brown" onclick="ella_to_you()"><h4>Ella</h4></button>';
  document.getElementById("ella_daughter_merge").innerHTML = '<img class="daughter" src="https://cdn.glitch.global/0a36e597-521e-4147-a59c-215cce2d2f41/daughter.png?v=1709228283061"><button class="char brown" onclick="ella_to_you()"><h4>Ella</h4></button>';
  document.getElementById("ella_grandma_merge").innerHTML = '<img class="grandma" src="https://cdn.glitch.global/0a36e597-521e-4147-a59c-215cce2d2f41/grandma.png?v=1709228283061"><button class="char brown" onclick="ella_to_you()"><h4>Ella</h4></button>';
}

function ella_to_you() {
  location.href='https://fight-simulator.glitch.me/all_you.html';
}

var countdown = 850;
function updateCountdownLeft() {
  console.log(countdown);
  document.getElementById("countdown_left").textContent = countdown / 100;
  countdown--;
  setTimeout(updateCountdownLeft, 10);
}

function to_Ella() {
  location.href='https://fight-simulator.glitch.me/all_ella.html';
}