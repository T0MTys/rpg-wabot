let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let healt = global.db.data.users[m.sender].healt
    let armor = global.db.data.users[m.sender].armor
    let warn = global.db.data.users[m.sender].warn
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let sampah = global.db.data.users[m.sender].sampah
    let banteng = global.db.data.users[m.sender].banteng
    let harimau = global.db.data.users[m.sender].harimau
    let gajah = global.db.data.users[m.sender].gajah
	let kambing = global.db.data.users[m.sender].kambing
	let panda = global.db.data.users[m.sender].panda
    let buaya = global.db.data.users[m.sender].buaya
    let kerbau = global.db.data.users[m.sender].kerbau
	let sapi = global.db.data.users[m.sender].sapi
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let babi = global.db.data.users[m.sender].babi
    let ayam = global.db.data.users[m.sender].ayam
    let paus =global.db.data.users[m.sender].paus 
	let kepiting = global.db.data.users[m.sender].kepiting 
	let gurita = global.db.data.users[m.sender].gurita 
	let cumi = global.db.data.users[m.sender].cumi 
	let buntal = global.db.data.users[m.sender].buntal 
	let dory = global.db.data.users[m.sender].dory 
	let lumba = global.db.data.users[m.sender].lumba 
	let lobster = global.db.data.users[m.sender].lobster 
	let hiu = global.db.data.users[m.sender].hiu 
	let udang = global.db.data.users[m.sender].udang 
	let ikan = global.db.data.users[m.sender].ikan 
	let orca = global.db.data.users[m.sender].orca
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
╭──────────────
│⬡ Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*
│
│⬡ 🥼 *Armor:* ${armor == 0 ? '❌' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
│⬡ ❤️️ *Health:* ${healt}
│⬡ 💹 *Money:* $${money}
│⬡ 📊 *Level:* ${level}
│⬡ ✨ *Exp:* ${exp}
│⬡ 📍 *Role:* ${role}
│⬡ 🎫 *Limit:* ${limit}
╰──────────────
╭───《 *Inventory* 》
│⬡ 💎 *Diamond:* ${diamond}
│⬡ 🥤 *Potion:* ${potion}
│⬡ 🗑️ *Sampah:* ${sampah}
│⬡ 🥓 *FoodPet :* ${makananpet}
│⬡ Total inv: *${diamond + potion + sampah + makananpet}* item
╰──────────────
╭───《 *Crate* 》
│⬡ 📦 *Common:* ${common}
│⬡ 🛍️ *Uncommon:* ${uncommon}
│⬡ 🎁 *Mythic:* ${mythic}
│⬡ 🧰 *Legendary:* ${legendary}
│⬡ 📫 *Pet:* ${pet}
╰──────────────
 ╭───《 KANDANG MU 》
 │
 │⬡ ️ 🐂 = [ ${banteng} ] Ekor Banteng
 │⬡  🐅 = [ ${harimau} ] Ekor Harimau
 │⬡  🐘 = [ ${gajah} ] Ekor Gajah
 │⬡  🐐 = [ ${kambing} ] Ekor Kambing
 │⬡  🐼 = [ ${panda} ] Ekor Panda
 │⬡  🐊 = [ ${buaya} ] Ekor Buaya
 │⬡  🐃 = [ ${kerbau} ] Ekor Kerbau
 │⬡  🐮 = [ ${sapi} ] Ekor Sapi
 │⬡  🐒 = [ ${monyet} ] Ekor Monyet
 │⬡  🐗 = [ ${babihutan} ] Ekor Babi Hutan
 │⬡  🐖 = [ ${babi} ] Ekor Babi
 │⬡  🐓 = [ ${ayam} ] Ekor Ayam
 │
 │⬡ 💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan*
 ╰──────────────
 ╭───《 KOLAM MU 》
 │
 │⬡  🦀 = [ ${kepiting} ] Ekor Kepiting
 │⬡  🦞 = [ ${lobster} ] Ekor Lobster
 │⬡  🦐 = [ ${udang} ] Ekor Udang
 │⬡  🦑 = [ ${cumi} ] Ekor Cumi
 │⬡  🐙 = [ ${gurita} ] Ekor Gurita
 │⬡  🐡 = [ ${buntal} ] Ekor Buntal
 │⬡  🐠 = [ ${dory} ] Ekor Dory
 │⬡  🐟 = [ ${orca} ] Ekor Orca
 │⬡  🐬 = [ ${lumba} ] Ekor Lumba
 │⬡  🐳 = [ ${paus} ] Ekor Paus
 │⬡  🦈 = [ ${hiu} ] Ekor Hiu
 │⬡  💬 *Total Ikan:* ${orca + buntal + dory + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus  }
 ╰──────────────
╭───《 *Pet* 》
│⬡ Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
│⬡ Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
│⬡ Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
╰──────────────
╭────────────────
│Level *${level}* To Level *${level + 1}*
│Exp *${exp}* -> *${max}* [${math <= 0 ? `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah * 100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing * 100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda * 100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────


*achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
