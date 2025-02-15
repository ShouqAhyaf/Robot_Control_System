function sendCommand(command) {
    fetch('store_direction.php?direction=' + command)
        .then(response => response.text())
        .then(data => {
            document.getElementById('last-direction').innerText = command;
        });
}
