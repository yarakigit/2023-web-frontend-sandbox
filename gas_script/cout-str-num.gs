function countText(request) {
  var text = request.parameter.text;
  var textLength = text.length;
  var spaceCount = text.split(" ").length - 1;
  var response = [
    {"text_length": textLength,"space_count": spaceCount},
    {"text_length": textLength,"space_count": spaceCount}
  ];
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(request) {
  return countText(request);
}

function doPost(request) {
  return countText(request);
}