// Function to change clock color based on background color
document.getElementById('color-picker').addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    const clockElement = document.getElementById('time');
    
    // Change background color
    document.getElementById('main-content').style.backgroundColor = selectedColor;

    // If the selected color is white or yellow, change the clock color to black
    if (selectedColor === '#ffffff' || selectedColor === '#ffff00') {
        clockElement.style.color = 'black';
    } else {
        clockElement.style.color = 'white'; // Default clock color
    }
});
