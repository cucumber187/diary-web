const memoForm = document.querySelector(".memo__form");
const memoInput = document.querySelector(".memo__input");
const memo = document.querySelector(".memo__text");

function submit(event){
    event.preventDefault();
    const newMemo = memoInput.value;
    const saveMemo = localStorage.setItem("memo", newMemo);
    memo.innerText = `"${localStorage.getItem("memo")}"`;
    memoInput.value = "";
}

memoForm.addEventListener("submit", submit);
memo.innerText = `"${localStorage.getItem("memo")}"`;