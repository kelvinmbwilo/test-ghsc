ALTER Table vaccine_reports
ADD plannedoutreachimmunizationsessions INT NULL;

ALTER TABLE vaccine_report_adverse_effect_line_items
ADD relatedToLineItemId INT NULL references vaccine_report_adverse_effect_line_items(id);