const rootEl = document.querySelector(':root');

const setCSSVar = function (name, value) {
  rootEl.style.setProperty(name, value);
}

// setTimeout(() => {
//     setCSSVar("--main-link-color", "#EF5C66")
//     setCSSVar("--main-text-color", "#FCB922")
//     setCSSVar("--main-bg-color", "#2B006A")
// }, 3000);