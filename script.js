<script >
      document.addEventListener('DOMContentLoaded', (event) => {
        const bookingForm = document.getElementById('bookingForm');
        const centerImage = document.getElementById('centerImage');
        const images = ['2.jpg', '1.jpg', '3.jpg'];  // Add your image paths here
        let currentIndex = 0;
    
        // Form validation
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
    
            const from = document.getElementById('from').value.trim();
            const to = document.getElementById('to').value.trim();
            const departure = document.getElementById('departure').value;
            const returnDate = document.getElementById('return').value;
    
            if (!from || !to || !departure) {
                alert('Please fill in all required fields.');
                return;
            }
    
            if (returnDate && new Date(departure) >= new Date(returnDate)) {
                alert('Return date must be after departure date.');
                return;
            }
    
            alert('Form submitted successfully!');
            // Here, you can add the code to handle the form submission, e.g., sending data to the server
        });
    
        // Image rotation
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            centerImage.style.opacity = 0;
            setTimeout(() => {
                centerImage.src = images[currentIndex];
                centerImage.style.opacity = 1;
            }, 1000);
        }, 5000);
    });