document.addEventListener("DOMContentLoaded", () => {
  const todoBox = document.getElementById("todoBox");
  const todo = document.getElementById("todo");
  const addButton = document.getElementById("add-button");
  const list = document.getElementById("list");

  addButton.addEventListener("click", () => {
    if (todo.value !== "") {
      const div = document.createElement("div");
      const ck = document.createElement("input");
      const text = document.createElement("span");
      const del = document.createElement("button");
      list.appendChild(div).append(ck, text, del);
      ck.type = "checkbox";
      text.textContent = todo.value;
      todo.value = "";
      del.textContent = "제거";

      ck.addEventListener("change", (event) => {
        div.style.textDecoration =
          event.target.checked === true ? "line-through" : "";
      });

      del.addEventListener("click", () => {
        div.parentNode.removeChild(div);
      });
    } else {
      alert("내용을 적어주세요");
    }
  });
});
