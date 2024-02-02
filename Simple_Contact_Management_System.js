// Load existing contacts from local storage
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Function to add a new contact
function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        const contact = { name, phone, email };
        contacts.push(contact);

        // Save the updated contacts to local storage
        localStorage.setItem('contacts', JSON.stringify(contacts));

        // Refresh the contact list
        displayContacts();

        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to display contacts in the table
function displayContacts() {
    const contactListElement = document.getElementById('contactList');
    contactListElement.innerHTML = '';

    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td><button onclick="deleteContact('${contact.name}')">Delete</button></td>
        `;
        contactListElement.appendChild(row);
    });
}

// Function to delete a contact
function deleteContact(name) {
    contacts = contacts.filter(contact => contact.name !== name);

    // Save the updated contacts to local storage
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Refresh the contact list
    displayContacts();
}

// Display initial contacts
displayContacts();