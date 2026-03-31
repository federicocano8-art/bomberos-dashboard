export function downloadPdfReport(title, sections) {
  const reportWindow = window.open("", "_blank");
  if (!reportWindow) return;

  const sectionHtml = sections
    .map(
      (s) => `
      <section style="margin-bottom:24px;">
        <h2 style="margin:0 0 8px 0;">${s.title}</h2>
        <pre style="white-space:pre-wrap;background:#f6f6f6;padding:12px;border-radius:8px;">${s.content}</pre>
      </section>
    `
    )
    .join("");

  reportWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>${title}</h1>
        ${sectionHtml}
      </body>
    </html>
  `);

  reportWindow.document.close();
  reportWindow.focus();
  reportWindow.print();
}
