document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const professionElement = document.getElementById('profession');
    const locationElement = document.getElementById('location');

    const nameText = 'Pranish Sris';
    const professionText = 'Digital Marketer';
    const locationText = 'Sainamaina municipality -4 murgiya, Rupendehi, Nepal';

    let nameIndex = 0;
    let professionIndex = 0;
    let locationIndex = 0;

    function typeName() {
        if (nameIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, 100);
        } else {
            setTimeout(typeProfession, 500);
        }
    }

    function typeProfession() {
        if (professionIndex < professionText.length) {
            professionElement.textContent += professionText.charAt(professionIndex);
            professionIndex++;
            setTimeout(typeProfession, 100);
        } else {
            setTimeout(typeLocation, 500);
        }
    }

    function typeLocation() {
        if (locationIndex < locationText.length) {
            locationElement.textContent += locationText.charAt(locationIndex);
            locationIndex++;
            setTimeout(typeLocation, 50);
        }
    }

    typeName();
});