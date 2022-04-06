let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089524770508]
│ • Gopay [089524770508]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/436504000095123
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
