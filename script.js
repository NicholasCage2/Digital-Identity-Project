function runSystem() {
    // Clear previous output
    document.getElementById('output').innerHTML = '';

    // Display loading message
    document.getElementById('output').innerHTML = 'Running system...';

    // Call backend Python script using AJAX
    fetch('/run_system')
        .then(response => response.text())
        .then(data => {
            // Display system information
            document.getElementById('output').innerHTML = data;

            // Simulate additional frontend interactions
            simulateFrontendInteractions();
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerHTML = 'An error occurred during system execution.';
        });
}

function simulateFrontendInteractions() {
    // Simulate additional frontend interactions
    setTimeout(() => {
        document.getElementById('output').innerHTML += '<br>Simulating additional frontend interactions...';
        // Additional interactions...

        // Scroll to the bottom of the output
        document.getElementById('output').scrollTop = document.getElementById('output').scrollHeight;
    }, 1000);
}
