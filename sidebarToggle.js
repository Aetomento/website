let isOpen = false;
const sidebar = document.getElementById('sideNav');
const pulley = document.getElementById('pulley');
const icon = document.createElement('i'); // Create the icon element only once

async function sidebarToggler() {
    isOpen = !isOpen;
    pulley.replaceChildren();

    // Update icon class list based on isOpen
    if (isOpen) {
        icon.className = 'fas fa-arrow-right-from-bracket fa-flip-horizontal fa-2xl';
        sidebar.classList.add('sideNav__open');
        pulley.classList.remove('pulley__absolute');
    } else {
        icon.className = 'fas fa-bars fa-2xl';
        sidebar.classList.remove('sideNav__open');
        pulley.classList.add('pulley__absolute');
    }

    pulley.appendChild(icon); // Append the icon to the pulley element
}