window.onload = (event) => {
    const startDate = new Date('2022-02-21');
const currentDate = new Date();

const daysInMilliseconds = currentDate - startDate;

// konvertovat na dny
const daysInDevelopment = Math.floor(daysInMilliseconds / (1000 * 60 * 60 * 24));

document.getElementById('daysInDevelopment').textContent = daysInDevelopment;
  };