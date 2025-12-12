console.log("サイト読み込みOK");

function runTool() {
  const input = document.getElementById("input").value;
  const result = "あなたが入力したのは：" + input;

  document.getElementById("output").textContent = result;
}
