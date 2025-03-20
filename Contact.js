// Contact.js
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setAddress(address);
        this.setCity(city);
        this.setState(state);
        this.setZip(zip);
        this.setPhone(phone);
        this.setEmail(email);
    }

    setFirstName(firstName) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("First Name must start with a capital letter and have at least 3 characters.");
        }
        this.firstName = firstName;
    }

    setLastName(lastName) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Last Name must start with a capital letter and have at least 3 characters.");
        }
        this.lastName = lastName;
    }

    setAddress(address) {
        if (address.length < 4) {
            throw new Error("Address must have at least 4 characters.");
        }
        this.address = address;
    }

    setCity(city) {
        if (city.length < 4) {
            throw new Error("City must have at least 4 characters.");
        }
        this.city = city;
    }

    setState(state) {
        if (state.length < 4) {
            throw new Error("State must have at least 4 characters.");
        }
        this.state = state;
    }

    setZip(zip) {
        if (!/^\d{5}$/.test(zip)) {
            throw new Error("Zip must be a valid 5-digit number.");
        }
        this.zip = zip;
    }

    setPhone(phone) {
        if (!/^\d{10}$/.test(phone)) {
            throw new Error("Phone must be a valid 10-digit number.");
        }
        this.phone = phone;
    }

    setEmail(email) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Email must be valid.");
        }
        this.email = email;
    }
}

