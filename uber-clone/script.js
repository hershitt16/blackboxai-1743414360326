document.addEventListener('DOMContentLoaded', function() {
    // Ride request form handling
    const rideForm = document.querySelector('.hero-section form');
    if (rideForm) {
        rideForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const pickup = rideForm.querySelector('input[placeholder="Enter pickup location"]').value;
            const destination = rideForm.querySelector('input[placeholder="Enter destination"]').value;
            
            if (!pickup || !destination) {
                alert('Please enter both pickup and destination locations');
                return;
            }
            
            // Simulate API call
            setTimeout(() => {
                const rideTypes = ['UberX', 'UberXL', 'Uber Black'];
                const randomType = rideTypes[Math.floor(Math.random() * rideTypes.length)];
                const price = (Math.random() * 20 + 5).toFixed(2);
                const time = Math.floor(Math.random() * 15 + 5);
                
                alert(`SIUUU! Your ${randomType} ride is coming!\nEstimated price: $${price}\nEstimated time: ${time} minutes\nSIUUUUUU!`);
            }, 1000);
        });
    }

    // Mobile menu toggle (will be implemented when we add mobile responsiveness)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });
    }
});