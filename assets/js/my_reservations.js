document.querySelectorAll('.annuler-btn').forEach(btn => {
    btn.addEventListener('click', async function() {
        const reservationId = this.dataset.id;
        
        if (confirm('Are you sure you want to cancel this reservation ?')) {
            try {
                const response = await fetch(`/SPORTIFY/includes/cancel_reservation.php`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        _method: 'DELETE', 
                        id: reservationId 
                    })
                });
                
                const result = await response.json();
                
                if (result.status === 'success') {
                    this.closest('tr').remove();
                    alert('Reservation canceled with success');
                } else {
                    alert('Erreur : ' + result.message);
                }
                
            } catch (error) {
                alert('Server error');
            }
        }
    });
});