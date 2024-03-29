// აპლიკაცია: კალკულატორი
// კალკულატორის ფუნქცია მომხმარებლებს საშუალებას აძლევს შეასრულონ ძირითადი არითმეტიკული მოქმედებები (+, -, *, /). მომხმარებლებს შეუძლიათ შეიყვანონ ორი რიცხვი და შემდეგ აირჩიონ ოპერაცია შედეგის მისაღებად. კალკულატორი ასევე შეიცავს შეყვანის ვალიდაციას არასწორი შეყვანების დასამუშავებლად.

function calculator() {
  //თავიდანვე განვსაზღვრეთ ცვლადები, რომლებსაც გამოვიყენებთ ფუნქციაში
  let num1, action, num2, result;

  //მომხმარებლის მიერ შეყვანილი მონაცემების ვალიდაცია ხდება do while statement-ისა და if statement-ის დახმარებით
  do {
    const input1 = prompt("შეიყვანეთ პირველი რიცხვი:");
    if (input1.trim() === "") {
      alert("გთხოვთ, შეიყვანოთ რიცხვი.");
      continue;
    }
    num1 = Number(input1);
    if (isNaN(num1)) {
      alert("შეყვანილი მონაცემი არ წარმოადგენს რიცხვს");
    }
  } while (isNaN(num1));

  do {
    action = prompt(
      "შეიყვანეთ ერთ-ერთი მათემატიკური ოპერაცია: (+,  -, /  ან  *)"
    );
    if (!["+", "-", "*", "/"].includes(action)) {
      alert("შეყვანილი მონაცემი არ წარმოადგენს მათემატიკურ ოპერაციას");
    }
  } while (!["+", "-", "*", "/"].includes(action));

  do {
    const input2 = prompt("შეიყვანეთ მეორე რიცხვი:");
    if (input2.trim() === "") {
      alert("გთხოვთ, შეიყვანეთ რიცხვი.");
      continue;
    }
    num2 = Number(input2);
    if (isNaN(num2)) {
      alert("შეყვანილი მონაცემი არ წარმოადგენს რიცხვს");
    }
  } while (isNaN(num2));

  //მათემატიკური ოპერაციების შესრულება კი switch statement-ით ხდება
  switch (action) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "ნულზე გაყოფა არ შეიძლება";
      } else {
        result = num1 / num2;
      }
      break;
  }
  //ბოლოს კი ხდება ფუნქციის რეკურსიულად გამოძახება, ვებ გვერდის დარეფრეშების თავიდან არიდების მიზნით.
  alert(`პასუხია ${result}`);
  calculator();
}

calculator();
