import "./style.css";
import UI from "./js/ui";
import TODO from "./js/todo";

const body = document.querySelector("body");
const todo = UI.parseTodo(new TODO("a", "a", "a", "a"));
body.appendChild(todo);
