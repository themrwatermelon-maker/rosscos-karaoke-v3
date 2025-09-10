import { db } from "./firebase-config.js";
import { collection, addDoc, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const eventId = localStorage.getItem("selectedEvent");
const form = document.getElementById("song-form");
const queueList = document.getElementById("queue");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("singer-name").value;
  const title = document.getElementById("song-title").value;
  const artist = document.getElementById("song-artist").value;

  await addDoc(collection(db, "events", eventId, "requests"), {
    name, title, artist, status: "pending"
  });

  alert("Song submitted successfully!");
  form.reset();
});

// Listen for updates
const q = query(collection(db, "events", eventId, "requests"), where("status", "==", "approved"));
onSnapshot(q, (snapshot) => {
  queueList.innerHTML = "";
  snapshot.forEach(doc => {
    const req = doc.data();
    const li = document.createElement("li"); 
    li.textContent = `${req.name} - ${req.title} (${req.artist})`;
    queueList.appendChild(li);
  });
});