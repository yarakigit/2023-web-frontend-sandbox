//Generate Chat GPT
function doGet(request) {
    // URLパラメーターから西暦を取得する
    var year = request.parameter.year;
  
    // 西暦から年号を取得する
    var era = getEra(year);
  
    // JSON形式で年号を返す
    var response = {era: era};
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // 西暦から年号を取得する関数
  function getEra(year) {
    // 年号とその開始年のデータ
    var eraData = [
      {name: "令和", start: 2019},
      {name: "平成", start: 1989},
      {name: "昭和", start: 1926},
      {name: "大正", start: 1912},
      {name: "明治", start: 1868},
    ];
  
    // 西暦に対応する年号を取得する
    for (var i = 0; i < eraData.length; i++) {
      var era = eraData[i];
      if (year >= era.start) {
        return era.name + (year - era.start + 1) + "年";
      }
    }
  
    // 対応する年号が見つからなかった場合は空文字列を返す
    return "";
  }