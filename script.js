const tasks = ["Handla", "Städa", "Plugga"];
const list = document.querySelector("#taskList");
const counter = document.querySelector(".counter");
let index = 0;
counter.textContent = index + "/" + tasks.length;
for (const task of tasks) {
  const li = document.createElement("li");
  li.textContent = task;
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  list.appendChild(li);

  const btn = document.createElement("button");
  btn.textContent = "remove";

  btn.addEventListener("click", () => {
    li.remove();
    index++;
    counter.textContent = index + "/" + tasks.length;
  });

  li.appendChild(btn);
}
