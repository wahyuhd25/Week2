import $ from "jquery";

export const tombol = (element) => {
  let sentences = [
    "Hey There, I'm Using WhatsApp",
    "Welcome to my, WOooooooRlldd",
    "Renew Your Definition, World SO High"
  ];

  var index = 0;

  element.click(function () {
    index = (index + 1) % sentences.length;
    $('#heading').text(sentences[index]);
  });
}
