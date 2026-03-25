const sheetName = 'leads'
const scriptProp = PropertiesService.getScriptProperties()

function intialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost(e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1

    const newRow = headers.map(function (header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    // 1. INSERÇÃO DA NOVA LINHA (Seu código original)
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    // ------------------------------------------------------------------
    // 2. CÓDIGO INTEGRADO PARA ENVIO DE E-MAIL 📧
    // ------------------------------------------------------------------

    // 🚨 CONFIGURAÇÕES 🚨
    const DESTINATARIO = "eduardo.rocha@egasosa.com.br, daiya@egasosa.com.br, mkt@egasosa.com.br, luciano.moreira@egasosa.com.br"; // <-- MUDAR
    // const DESTINATARIO = "daiya@egasosa.com.br, mkt@egasosa.com.br"; // <-- MUDAR
    const ASSUNTO = `Novo Lead Recebido na Planilha "${sheetName}"`;

    // Cria o corpo do e-mail listando todos os dados
    let corpoEmail = "Um novo pedido de contato foi adicionada (Linha " + nextRow + "):\n\n";

    // Itera sobre os cabeçalhos e os novos valores para montar o corpo do e-mail
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const value = newRow[i];

      // Adiciona a linha ao corpo do e-mail (Ex: Nome: [valor])
      corpoEmail += `${header}: ${value}\n`;
    }

    // Envia o e-mail
    MailApp.sendEmail(DESTINATARIO, ASSUNTO, corpoEmail);
    // Logger.log("Email de notificação enviado para: " + DESTINATARIO); // Opcional para debug

    // ------------------------------------------------------------------

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    // Se a inserção falhar (ou o envio do email), o erro será capturado aqui
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() })) // Usar e.toString() para melhor output
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
