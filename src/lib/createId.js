let id = parseInt(window.localStorage.getItem("_idMax") || "0") || 0;

export function createId() {
  id++;
  return id;
}
