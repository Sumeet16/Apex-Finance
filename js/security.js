const transaction = document.querySelector(".transactionA");

transaction.addEventListener("click", () => {
  document.querySelector(".toolTip").classList.toggle("toolTipShow");
});

const lists = document.querySelectorAll(".list");

for (let index = 0; index < lists.length; index++) {
  lists[index].addEventListener("click", () => {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove("active");
    }
    lists[index].classList.add("active");
  });
}
