import { db } from "./firebase-config.js";
import { collection, getDocs, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const loginBtn = document.getElementById("login-btn");
const dashboard = document.getElementById("dashboard");
const passwordInput = document.getElementById("password");
const queueEl = document.getElementById("host-queue");

loginBtn.addEventListener("click", () => {
  if (passwordInput.value === "merlinthedog") {
    document.getElementById("login-section").style.display = "none";
    dashboard.style.display = "block";
    loadEvents();
  } else {
    alert("Wrong password");
  }
});

async function loadEvents() {
  const snapshot = await getDocs(collection(db, "events"));
  snapshot.forEach(doc => {
    console.log("Event:", doc.id, doc.data());
  });
}

function listenQueue(eventId) {
  onSnapshot(collection(db, "events", eventId, "requests"), (snapshot) => {
    queueEl.innerHTML = "";
    snapshot.forEach(reqDoc => {
      const req = reqDoc.data();
      const li = document.createElement("li");
      li.textContent = `${req.name} - ${req.title}`;
      if (req.status === "approved") {
        const btn = document.createElement("button");
        btn.textContent = "✔️ Done";
        btn.onclick = async () => {
          await updateDoc(doc(db, "events", eventId, "requests", reqDoc.id), { status: "complete" });
        };
        li.appendChild(btn);
      }
      queueEl.appendChild(li);
    });
  });
}