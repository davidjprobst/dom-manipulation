const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.classList.add("red-text");
redText.textContent = "This is red text";
redText.style.color = "red";

const blueHeader = document.createElement("h3");
blueHeader.setAttribute("id", "blue-header");
blueHeader.textContent = "This is a blue h3";
blueHeader.style.color = "blue";

const borderedContent = document.createElement("div");
borderedContent.classList.add("bordered-content");
borderedContent.style.border = "solid black";

const borderedHeader = document.createElement("h1");
borderedHeader.textContent = "I'm in a div!";

const borderedParagraph = document.createElement("p");
borderedParagraph.textContent = "ME TOO!";
borderedContent.appendChild(borderedHeader);
borderedContent.appendChild(borderedParagraph);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

container.appendChild(blueHeader);
container.appendChild(content);
container.appendChild(redText);
container.appendChild(borderedContent);