/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT: TỰ ĐỘNG TRANG TRÍ FILE QUẢN LÝ TIẾN ĐỘ LONA DRESS
 * ==============================================================================
 * Hướng dẫn 3 bước sử dụng:
 * 1. Trên Google Sheets, bấm vào menu "Tiện ích mở rộng" (Extensions) -> Chọn "Apps Script".
 * 2. Xóa toàn bộ mã cũ, dán đoạn mã bên dưới vào rồi bấm biểu tượng nút "Lưu" (💾).
 * 3. Bấm nút "Chạy" (Run ▶️) ở phía trên. Trong 3 giây toàn bộ bảng tính sẽ biến thành Dashboard sang trọng!
 * ==============================================================================
 */

function formatLonaProgressSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // 1. Chèn 5 dòng ở trên cùng làm Dashboard Thống Kê
  sheet.insertRowsBefore(1, 5);
  
  // Xóa định dạng cũ
  sheet.getRange(1, 1, 35, 10).clearFormat();
  
  // 2. Banner Tiêu Đề Bảng Tính (Dòng 1)
  var titleRange = sheet.getRange("A1:I1");
  titleRange.merge();
  titleRange.setValue("📊 TIẾN ĐỘ THI CÔNG & XÂY DỰNG TIỆM THỜI TRANG LONA DRESS HỘI AN");
  titleRange.setBackground("#5C4433");
  titleRange.setFontColor("#FFFFFF");
  titleRange.setFontSize(13);
  titleRange.setFontWeight("bold");
  titleRange.setHorizontalAlignment("center");
  titleRange.setVerticalAlignment("middle");
  sheet.setRowHeight(1, 42);

  // 3. Thẻ KPI Thống Kê & Thanh Tiến Độ Sparkline (Dòng 3 - 4)
  // Thẻ 1: Số bước hoàn thành
  sheet.getRange("A3:C3").merge().setValue("TIẾN ĐỘ THI CÔNG TỔNG THỂ").setFontWeight("bold").setFontSize(9).setFontColor("#8C6D53").setHorizontalAlignment("center");
  sheet.getRange("A4:C4").merge().setFormula('=COUNTIF(H7:H27, TRUE) & " / " & COUNTA(H7:H27) & " Bước"').setFontWeight("bold").setFontSize(15).setFontColor("#5C4433").setHorizontalAlignment("center");
  sheet.getRange("A3:C4").setBackground("#FAF5ED").setBorder(true, true, true, true, false, false, "#E5D9C8", SpreadsheetApp.BorderStyle.SOLID);

  // Thẻ 2: Tỷ lệ %
  sheet.getRange("D3:E3").merge().setValue("TỶ LỆ HOÀN THÀNH (%)").setFontWeight("bold").setFontSize(9).setFontColor("#8C6D53").setHorizontalAlignment("center");
  sheet.getRange("D4:E4").merge().setFormula('=COUNTIF(H7:H27, TRUE)/COUNTA(H7:H27)').setNumberFormat("0.0%").setFontWeight("bold").setFontSize(18).setFontColor("#4A7C59").setHorizontalAlignment("center");
  sheet.getRange("D3:E4").setBackground("#EAF2EC").setBorder(true, true, true, true, false, false, "#B8DAC3", SpreadsheetApp.BorderStyle.SOLID);

  // Thẻ 3: Thanh tiến độ Sparkline Bar Chart
  sheet.getRange("F3:I3").merge().setValue("THANH TIẾN ĐỘ TRỰC QUAN (SPARKLINE BAR)").setFontWeight("bold").setFontSize(9).setFontColor("#8C6D53").setHorizontalAlignment("center");
  sheet.getRange("F4:I4").merge().setFormula('=SPARKLINE(COUNTIF(H7:H27, TRUE)/COUNTA(H7:H27), {"charttype","bar";"max",1;"color1","#4A7C59";"color2","#EBE3D8"})');
  sheet.getRange("F3:I4").setBackground("#FAF5ED").setBorder(true, true, true, true, false, false, "#E5D9C8", SpreadsheetApp.BorderStyle.SOLID);

  sheet.setRowHeight(3, 20);
  sheet.setRowHeight(4, 38);
  sheet.setRowHeight(5, 12); // Khoảng trống

  // 4. Header Cột Dữ Liệu (Dòng 6)
  var headers = ["STT", "Mã Bước", "Giai Đoạn", "Hạng Mục Công Việc", "Hành Động Cụ Thể & Mô Tả Detail", "Khung Thời Gian", "Người Đảm Nhận (PIC)", "Hoàn Thành", "Ghi Chú Vấn Đề (Remark)"];
  for (var i = 0; i < headers.length; i++) {
    sheet.getRange(6, i + 1).setValue(headers[i]);
  }
  var headerRange = sheet.getRange("A6:I6");
  headerRange.setBackground("#8C6D53");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  sheet.setRowHeight(6, 32);

  // 5. Chuyển Cột H (Dòng 7 tới 27) thành Checkbox Interactive
  var checkboxRange = sheet.getRange("H7:H27");
  checkboxRange.insertCheckboxes();
  checkboxRange.setHorizontalAlignment("center");

  // Căn giữa cho STT, Mã bước, Thời gian, PIC, Checkbox
  sheet.getRange("A7:B27").setHorizontalAlignment("center");
  sheet.getRange("F7:H27").setHorizontalAlignment("center");
  sheet.getRange("A7:I27").setVerticalAlignment("middle");
  
  // Định dạng màu dòng xe kẽ (Zebra Lines)
  for (var r = 7; r <= 27; r++) {
    sheet.setRowHeight(r, 28);
    if (r % 2 === 0) {
      sheet.getRange(r, 1, 1, 9).setBackground("#FAF5ED");
    } else {
      sheet.getRange(r, 1, 1, 9).setBackground("#FFFFFF");
    }
  }

  // Tạo đường viền mảnh nhã nhặn cho bảng
  sheet.getRange("A6:I27").setBorder(true, true, true, true, true, true, "#EBE3D8", SpreadsheetApp.BorderStyle.SOLID);

  // 6. Định Dạng Có Điều Kiện (Conditional Formatting): Đổi dòng sang màu Xanh nhẹ khi tick Hoàn thành
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=$H7=TRUE')
    .setBackground("#EAF2EC")
    .setFontColor("#2E5C38")
    .setRanges([sheet.getRange("A7:I27")])
    .build();
  
  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);

  // 7. Tự động điều chỉnh độ rộng cột chuẩn đẹp
  sheet.setColumnWidth(1, 55);  // STT
  sheet.setColumnWidth(2, 75);  // Mã Bước
  sheet.setColumnWidth(3, 210); // Giai Đoạn
  sheet.setColumnWidth(4, 230); // Hạng Mục
  sheet.setColumnWidth(5, 380); // Mô Tả Detail
  sheet.setColumnWidth(6, 120); // Thời gian
  sheet.setColumnWidth(7, 130); // PIC
  sheet.setColumnWidth(8, 100); // Checkbox
  sheet.setColumnWidth(9, 300); // Remark

  SpreadsheetApp.getUi().alert("✨ ĐÃ TRANG TRÍ BẢNG TÍNH GOOGLE SHEETS THÀNH CÔNG!\n\nĐã thêm: Thanh tiến độ Sparkline, Ô Checkbox interactive, Thẻ KPI Thống kê & Phối màu Tone Nâu / Xanh sang trọng.");
}
