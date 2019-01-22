function generateQuiz() {
    // Provide the full URL of the CSV file.
  var csvUrl = "https://raw.githubusercontent.com/CS-In-English/computer-science/master/binary/Basic/Quiz/KahootQuizBinary.csv";
  var csvContent = UrlFetchApp.fetch(csvUrl).getContentText();
  var csvData = Utilities.parseCsv(csvContent);
  
  // Create a new form, then add a checkbox question, a multiple choice question,
  // a page break, then a date question and a grid of questions.
  var form = FormApp.getActiveForm()
  form.setIsQuiz(true)
  for (var i = 1; i < csvData.length; i++) {
    var item = form.addCheckboxItem()
    item.setTitle(csvData[i][0]);
    item.setChoices([
        item.createChoice(csvData[i][1],true),
        item.createChoice(csvData[i][2],false),
        item.createChoice(csvData[i][3],false),
        item.createChoice(csvData[i][4],false)
    ]);
  }
}
