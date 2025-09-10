import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const grid = document.getElementById("event-grid");

async function loadEvents() {
  const snapshot = await getDocs(collection(db, "events"));
  snapshot.forEach(doc => {
    const event = doc.data();
    const div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `<h3>${event.name}</h3><p>${event.location}</p><p>${event.datetime}</p>`;
    div.onclick = () => {
      localStorage.setItem("selectedEvent", doc.id);
      window.location.href = "submit.html";
    };
    grid.appendChild(div);
  });
}

loadEvents();