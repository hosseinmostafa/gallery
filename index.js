const contactChip = document.querySelector('.contact-chip'),
    closeButton = contactChip.querySelector('.close-button'),
    profileImage = contactChip.querySelector('.profile-image');

var display = 0

function hid(){
    if (display ==1){
        closeButton.addEventListener('click', () => {
            contactChip.classList.add('closed');
        });
        display = 0
    }else{
        profileImage.addEventListener('click', () => {
            contactChip.classList.remove('closed');
        });
        display = 1
    }
    
}