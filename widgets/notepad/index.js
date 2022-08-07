let previouslyClearedText = "";
let fileCount = 0;

function updateCountdown() {
  document.querySelector("#countdown").innerHTML = 200 - (document.querySelector("#quick-notes").value).length;
}

function clearText() {
  document.querySelector("#alert").innerHTML = "All text has been cleared.";
  document.querySelector("#alert").className = "cleared";

  previouslyClearedText = document.querySelector("#quick-notes").value;
  document.querySelector("#quick-notes").value = "";
  updateCountdown();
}

function returnText() {
  document.querySelector("#alert").innerHTML = "Returned text.";
  document.querySelector("#alert").className = "returned";

  document.querySelector("#quick-notes").value = previouslyClearedText;
  previouslyClearedText = "";
  updateCountdown();
}

function copyText() {
  document.querySelector("#alert").innerHTML = "Notes successfully copied to clipboard.";
  document.querySelector("#alert").className = "copied";

  text = document.querySelector("#quick-notes").value;
  var input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
}

function downloadText() {
  document.querySelector("#alert").innerHTML = "Downloading text file...";
  document.querySelector("#alert").className = "downloaded";

  var textToWrite = document.querySelector("#quick-notes").value;
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain", endings: "native" });

  if (fileCount < 10) {
    fileCount = "00" + fileCount;
  } else if (fileCount < 100) {
    fileCount = "0" + fileCount;
  }
  var fileNameToSaveAs = `4S_QuickNotes_${fileCount}.txt`;
  fileCount++;

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";

  if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}