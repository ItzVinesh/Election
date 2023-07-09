function submitVote() {
  const selectedOption = document.querySelector('input[name="head-girl"],input[name="head-boy"]:checked');
  if (selectedOption) {
    const option = selectedOption.value;
    vote(option);
    alert('Vote submitted successfully!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Please select an option to vote.');
  }
}

function vote(option) {
  // Get the existing vote data from localStorage or initialize it
  let voteData = JSON.parse(localStorage.getItem('voteData')) || {
    'name1': 0,
    'name2': 0,
    'name3': 0,
    'name4': 0,
    'name5': 0,
    'name6': 0,
    'name7': 0,
    'name8': 0,
    'name9': 0,
    'name10': 0,
  };

  // Increment the vote count for the selected option
  voteData[option]++;

  // Store the updated vote data in localStorage
  localStorage.setItem('voteData', JSON.stringify(voteData));
}

// Get the vote data from localStorage
let voteData = JSON.parse(localStorage.getItem('voteData'));

// Display the vote results on the dashboard
document.getElementById('result1').textContent = `Option 1: ${voteData['Option 1']} votes`;
document.getElementById('result2').textContent = `Option 2: ${voteData['Option 2']} votes`;
document.getElementById('result3').textContent = `Option 3: ${voteData['Option 3']} votes`;
document.getElementById('result4').textContent = `Option 4: ${voteData['Option 4']} votes`;
document.getElementById('result5').textContent = `Option 5: ${voteData['Option 5']} votes`;
document.getElementById('result6').textContent = `Option 6: ${voteData['Option 6']} votes`;
document.getElementById('result7').textContent = `Option 7: ${voteData['Option 7']} votes`;
document.getElementById('result8').textContent = `Option 8: ${voteData['Option 8']} votes`;
document.getElementById('result9').textContent = `Option 9: ${voteData['Option 9']} votes`;
document.getElementById('result10').textContent = `Option 10: ${voteData['Option 10']} votes`;
