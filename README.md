# rpg-wabot

<a href="https://github.com/DarknessNightmare/rpg-wabot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/DarknessNightmare/rpg-wabot?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/DarknessNightmare/rpg-wabot?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/DarknessNightmare/rpg-wabot?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/DarknessNightmare/rpg-wabot?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/issues"><img title="Issues" src="https://img.shields.io/github/issues/DarknessNightmare/rpg-wabot?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/DarknessNightmare/rpg-wabot?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/DarknessNightmare/rpg-wabot?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/DarknessNightmare/rpg-wabot/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/DarknessNightmare/rpg-wabot?label=PullRequest&color=red&style=flat-square"></a>


## Join Group Bot
[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/JVHH9zmMGEk8lokfzxdGa2) 
**Group Bot**


### Settings owner and apikey
Change [here](https://github.com/DarknessNightmare/rpg-wabot/blob/master/config.js)
```js
global.owner = ['436504000095123'] // change your number
global.mods = ['84589488115'] // you need moderator? 
```
Change apikey
```js
global.APIKeys = { 
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYLU', //register di api.xteam.xyz kalau mau limitnya banyak
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz', //register di api.zeks.xyz kalau mau limitnya banyak
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
```

#### Deploy to Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/DarknessNightmare/rpg-wabot)

#### Heroku Buildpack
| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

### FOR TERMUX USER
```bash
pkg update && pkg upgrade
pkg install bash && pkg install wget
wget -O - https://raw.githubusercontent.com/DarknessNightmare/rpg-wabot/main/install2.sh | bash
```

---------

## INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & rpg-wabot ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/DarknessNightmare/rpg-wabot
cd rpg-wabot
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/DarknessNightmare/rpg-wabot
cd rpg-wabot
npm install
npm update
```

#### Installing the FFmpeg
* Download one of the FFmpeg versions [here](https://ffmpeg.org/download.html).
* Extract file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run the following command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
If successful, it will give you a message like:
`SUCCESS: specified value was saved`.

* Now that you have FFmpeg installed, verify that it worked by running this command to see the version:
```cmd
> ffmpeg -version
```
---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--self`

Activate self mode (Ignores other)

### `--pconly`

If that chat not from private bot, bot will ignore

### `--gconly`

If that chat not from group, bot will ignore

### `--swonly`

If that chat not from status, bot will ignore

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--big-qr`

If small qr unicode doesn't support

### `--restrict`

Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`

Enable image inspector through terminal

### `--autoread`

If enabled, all incoming messages will be marked as read

### `--nyimak`

No bot, just print received messages and add users to database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

### `--presence <Presence>`

when the bot executes the command, the bot will type, record, etc.

Presence avaible: available, composing, recording, paused

---------


### Thanks To 
**Allah SWT**,

**Orang Tua**,

**Semua yang selalu mendukung**

[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)
[![DarknessNightmare](https://github.com/DarknessNightmare.png?size=100)](https://github.com/DarknessNightmare)

#### Contributor
[![idhamthoriqbot](https://github.com/idhamthoriqbot.png?size=100)](https://github.com/idhamthoriqbot)
[![Adiixyz](https://github.com/Adiixyz.png?size=100)](https://github.com/Adiixyz)
<a href="https://github.com/zatu22"><img src="https://github.com/zatu22.png" width="100" height="100" alt="zatu22"/></a>
[![arisawali2014](https://github.com/arisawali2014.png?size=100)](https://github.com/arisawali2014)
[![Nobuyaki](https://github.com/Nobuyaki.png?size=100)](https://github.com/Nobuyaki)
[![unx21](https://github.com/unx21.png?size=100)](https://github.com/unx21)
[![botstylee](https://github.com/botstylee.png?size=100)](https://github.com/botstylee)
[![qisyana](https://github.com/qisyana.png?size=100)](https://github.com/qisyana)
[![ryznxx](https://github.com/ryznxx.png?size=100)](https://github.com/ryznxx)
<a href="https://github.com/apps/dependabot"><img src="https://avatars.githubusercontent.com/in/29110?v=4" width="100" height="100" alt="@dependabot[bot]"/></a>
[![itsmeR1F4I](https://github.com/itsmeR1F4I.png?size=100)](https://github.com/itsmeR1F4I)
[![ZeroChanBot](https://github.com/ZeroChanBot.png?size=100)](https://github.com/ZeroChanBot)
