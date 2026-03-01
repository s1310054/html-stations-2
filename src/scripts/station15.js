function displayList() {
    const fruits = document.getElementById("fruits");
    const ul = document.createElement("ul");
    fruits.innerHTML = fruits.innerHTML.replace(/<p>/g, '<li>').replace(/<\/p>/g, '</li>').replace(/<li>/, '<ul><li>');
};