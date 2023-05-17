function openOrderForm() {
    let dough = getName(document.getElementsByName("dough"));
    let size = getName(document.getElementsByName("pizza"));
    let extras = getName(document.getElementsByName("topping"));
    let price =
        getValue(document.getElementsByName("dough")) +
        getValue(document.getElementsByName("pizza")) +
        getValue(document.getElementsByName("topping"));
    console.log(dough);
    console.log(size);
    console.log(extras);
    console.log(price);
    alert(
        "your order is: dough - " + dough + ", size - " + size + ", extras - " + extras + ", total payment - " + price+"$");
}

function getName(objects) {
    let a = "";
    for (let i = 0; i < objects.length; i++) {
        const element = objects[i];
        if (element.checked) {
            a = a + " " + element.id;
        }
    }
    return a;
}

function getValue(objects) {
    let run = 0;
    for (let i = 0; i < objects.length; i++) {
        const element = objects[i];
        if (element.checked) {
            run += parseInt(element.value);
        }
    }
    return run;
}