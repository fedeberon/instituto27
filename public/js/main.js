// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all section headings
    var headings = document.querySelectorAll('h2');
    
    // Add click event listeners to all headings
    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            // Toggle the next element (the list)
            var nextElement = this.nextElementSibling;
            if (nextElement && nextElement.tagName === 'UL') {
                nextElement.style.display = 
                    nextElement.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Add hover effect to list items
    var listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            this.style.color = '#2c3e50';
            this.style.fontWeight = 'bold';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.color = '#333';
            this.style.fontWeight = 'normal';
        });
    });
}); 