// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2-EpgTM8C-pCDGWZkT9K6lPLt9qYUKxk",
    authDomain: "travelworld-d97ef.firebaseapp.com",
    databaseURL: "https://travelworld-d97ef-default-rtdb.firebaseio.com",
    projectId: "travelworld-d97ef",
    storageBucket: "travelworld-d97ef.appspot.com",
    messagingSenderId: "1044902042913",
    appId: "1:1044902042913:web:612870f2fa2b1376283260",
    measurementId: "G-101J190J0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

const findCityInput = document.querySelector("#findCityInput");
const startDateInput = document.querySelector("#startDateInput");
const endDateInput = document.querySelector("#endDateInput");
const numPeopleInput = document.querySelector("#numPeopleInput");
const resultsDiv = document.querySelector("#results");
const findBtn = document.querySelector("#find");

function FindData() {
    const dbref = ref(db);
    resultsDiv.innerHTML = '';

    get(child(dbref, "TravelLocations"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                let found = false;
                for (let key in data) {
                    if (data[key].City.toLowerCase() === findCityInput.value.toLowerCase()) {
                        resultsDiv.innerHTML += `<h3>Name: ${data[key].Name}</h3>`;
                        resultsDiv.innerHTML += `<h3>Address: ${data[key].Address}</h3>`;
                        resultsDiv.innerHTML += `<h3>Max Number of People: ${data[key].MaxNumPeople}</h3><br>`;
                        found = true;
                    }
                }
                if (!found) {
                    resultsDiv.innerHTML = "<h3>No data found</h3>";
                }
            } else {
                resultsDiv.innerHTML = "<h3>No data found</h3>";
            }
        })
        .catch((error) => {
            alert(error);
        });
}

findBtn.addEventListener('click', FindData);
