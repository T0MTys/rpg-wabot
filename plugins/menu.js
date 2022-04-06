let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'rpg': 'ʀᴘɢ', 
  'main': 'ᴍᴀɪɴ',
  'game': 'ɢᴀᴍᴇ',
  'xp': 'ᴇxᴘ & ʟɪᴍɪᴛ',
  'sticker': 'sᴛɪᴄᴋᴇʀ',
  'kerang': 'ᴋᴇʀᴀɴɢ ᴀᴊᴀɪʙ',
  'quotes': 'ǫᴜᴏᴛᴇs',
  'admin': 'ᴀᴅᴍɪɴ',
  'group': 'ɢʀᴏᴜᴘ',
  'premium': 'ᴘʀᴇᴍɪᴜᴍ',
  'internet': 'ɪɴᴛᴇʀɴᴇᴛ',
  'anonymous': 'ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ',
  'nulis': 'ᴍᴀɢᴇʀ ɴᴜʟɪs & ʟᴏɢᴏ',
  'downloader': 'ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
  'tools': 'ᴛᴏᴏʟs',
  'fun': 'ғᴜɴ',
  'database': 'ᴅᴀᴛᴀʙᴀsᴇ',
  'vote': 'ᴠᴏᴛᴇ',
  'absen': 'ᴀʙsᴇɴ',
  'quran': 'ǫᴜʀᴀɴ',
  'jadibot': 'ᴊᴀᴅɪ ʙᴏᴛ',
  'owner': 'ᴏᴡɴᴇʀ',
  'host': 'ʜᴏsᴛ',
  'advanced': 'ᴀᴅᴠᴀɴᴄᴇ',
  'info': 'ɪɴғᴏ',
  '': 'No Category',
}
const defaultMenu = {
  before: `
╭──═[ *INFO PENGGUNA* ]═──
│╭──────────────···
┴│▸ *Name:* %name
⬡│▸ *Limit:* %limit
⬡│▸ *Money:* %money
⬡│▸ *Role:* %role
⬡│▸ *Level:* %level [%xp4levelup]
⬡│▸ *Xp:* %exp / %maxexp
┬│▸ *Total Xp:* %totalexp
│╰───────────────···
┠────═[ *TODAY* ]═────
│╭───────────────···
┴│▸          %ucapan
⬡│▸ *Hari:* %week %weton, 
⬡│▸ *Tanggal:* %date
⬡│▸ *Tanggal Islam:* %dateIslamic
┬│▸ *Waktu:* %time
│╰───────────────···
┠────═[ *BOT INFO* ]═────
│╭──────────────···
┴│▸ *Nama Bot:* %me
⬡│▸ *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
⬡│▸ *Prefix:* [ %p ]
⬡│▸ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
⬡│▸ *Uptime:* %uptime (%muptime)
┬│▸ *Database:* %rtotalreg dari %totalreg
│╰───────────────···
╰─────────═┅═───────
%readmore`.trimStart(),
  header: '┏────═[ %category ]═─────',
  body: '│⬣ %cmd',
  footer: '╰───────═┅═──────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}

╭──═[ *Thanks To* ]═──\n│⬗ ʙᴀɪʟᴇʏs\n│⬗ ɴᴜʀᴜᴛᴏᴍᴏ\n│⬗ xᴛᴇᴀᴍ\n│⬗ ᴅᴀʀᴋɴᴇss\n│⬗ ᴢᴇᴋs\n│⬗ ʙᴏᴄʜɪʟ ɢᴀᴍɪɴɢ\n│⬗ ᴋᴀɴɴᴀᴄʜᴀɴɴ\n│⬗ ᴢᴇʀᴏᴄʜᴀɴ\n│⬗ ʟɪᴛʀʜᴀᴘ\n╰─────═┅═─────
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let premium = global.db.data.users[m.sender].premium
    let prems = `${premium ? 'Yes': 'No'}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    const reply = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        orderMessage: {
            itemCount: 2022,
            itemCoun: 404,
            surface: 404,
            message: `© ${conn.user.name}`,
            orderTitle: 'B',
            thumbnail: thumb,
            sellerJid: '0@s.whatsapp.net'
        }
    }
}
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.send3ButtonImg(m.chat, thumb, `Hi! Im ${conn.user.name}\n\n${text.trim()}`, '❑ Instagram Owner\n⬗ instagram.com/dxd.darkness \n⬗ instagram.com/einstein_mechio\n❑ About Bot\n⬗ Darknessnightmare.github.io \n❑ Chat Owner\n⬗ Wa.me/436504000095123\n❑ Group Bot\n⬗ https://chat.whatsapp.com/JVHH9zmMGEk8lokfzxdGa2', 'ping', '.ping', 'owner', '-owner', 'donasi', '.donasi', reply)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}
