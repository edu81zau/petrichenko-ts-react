// //(() => {
// const forms = document.querySelectorAll("form");
// const email = document.querySelector("#email") as HTMLInputElement;
// const title = document.querySelector("#title") as HTMLInputElement;
// const text = document.querySelector("#text") as HTMLTextAreaElement;
// const checkbox = document.querySelector("#checkbox") as HTMLInputElement;

// interface IFormData {
//   email: string;
//   title: string;
//   text: string;
//   checkbox: boolean;
// }

// const formData: IFormData = {
//   email: "",
//   title: "",
//   text: "",
//   checkbox: false,
// };

// forms.forEach((form) => {
//   console.log("form", typeof form);
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     formData.email = email?.value ?? "";
//     formData.title = title?.value ?? "";
//     formData.text = text?.value ?? "";
//     formData.checkbox = checkbox?.checked ?? false;

//     if (validateFormData(formData)) {
//       checkFormData(formData);
//     }
//   });
// });

// function validateFormData(data: IFormData) {
//   const isValid = Object.values(data).every(
//     //
//     function (value) {
//       return value;
//     }
//   );
//   // Если каждое из свойств объекта правдиво...
//   if (isValid) {
//     return true;
//   } else {
//     console.log("Please, complete all fields");
//     return false;
//   }
// }

// function checkFormData(data: IFormData) {
//   const { email } = data;
//   const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

//   if (emails.some((e) => e === email)) {
//     console.log("This email is already exist");
//   } else {
//     console.log("Posting data...");
//   }
// }
// //})();

interface IFormData {
  email: string;
  title: string;
  text: string;
  isChecked: boolean;
}
function onSumbmitClick(event) {
  event.preventDefault();
  // Example usage
  const formData = getFormData();
  console.log(formData);

  //debugger;
}
function getFormData(): IFormData {
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const textArea = document.getElementById("text") as HTMLTextAreaElement;
  const checkbox = document.getElementById("checkbox") as HTMLInputElement;

  const formData: IFormData = {
    email: emailInput.value,
    title: titleInput.value,
    text: textArea.value,
    isChecked: checkbox.checked,
  };
  // formData.email = emailInput.value;
  // formData1.append("email", emailInput.value);
  // formData1.append("title", titleInput.value);
  // formData1.append("text", textArea.value);
  // formData1.append("checkbox", checkbox.checked.toString()); // Здесь преобразование в строку

  return formData;
}
