<div align="center">
  <p>
    <a href="https://nodei.co/npm/distube/"><img src="https://nodei.co/npm/distube.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
  <p>
    <img alt="npm" src="https://img.shields.io/npm/dt/distube">
    <img alt="Depfu" src="https://img.shields.io/depfu/skick1234/DisTube">
    <img alt="Codacy Grade" src="https://img.shields.io/codacy/grade/79c8b7d7d026410f8e1b7e9d326167a7?label=Codacy%20Score">
    <img alt="CodeFactor Grade" src="https://img.shields.io/codefactor/grade/github/skick1234/DisTube?label=Codefactor%20Score">
  </p>
</div>

This fork adds support for multiple filters with interchangable values. No support will be given if you decide to use this fork. Please support the official release!

# DisTube

A Discord.js module to simplify your music commands and play songs with audio filters on Discord without any API key.

[DisTube Support Server](https://discord.gg/feaDd9h) - [Frequently Asked Questions](https://discord.gg/feaDd9h)

## Features

- Build on @discordjs/voice
- Easy to use and customize
- Support YouTube, SoundCloud, Facebook, and [700+ more sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html)
- Audio filters (bassboost, nightcore, vaporwave,...)
- Autoplay related songs
- Plugin system to support more sites ([Plugin List](https://distube.js.org/#/docs/DisTube/beta/plugin/list))

## Installation

```npm
npm install distube@alpha
```

### Requirement

- Node v12 or higher
- [discord.js](https://discord.js.org) v12 or **v13 _(Recommended)_**
- [@discordjs/voice](https://github.com/discordjs/voice) - `npm install @discordjs/voice`
- [FFmpeg](https://www.ffmpeg.org/download.html)
- [@discordjs/opus](https://github.com/discordjs/opus) - `npm install @discordjs/opus`
- [sodium](https://www.npmjs.com/package/sodium) or [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)
- [python](https://www.python.org/) _(Optional - For [`youtube-dl`](https://youtube-dl.org/) to support [700+ more sites](https://ytdl-org.github.io/youtube-dl/supportedsites.html).)_

## Documentation

Read DisTube's definitions, properties and events details in the [Documentation page](https://distube.js.org/).

## Example Bot

- [DisTube Bot](https://skick.xyz/DisTube) - A music bot with reaction controller, filters, DJ mode, user's custom playlist and voting.
- [DisTube Example](https://github.com/distubejs/example) - Example bot with simple command handler.
- [DisTube Guide](https://distube.js.org/guide) - How to build a music bot from scratch.

## Dependencies

- [node-ytdl-core](https://github.com/fent/node-ytdl-core): YouTube scraper
- [node-ytsr](https://github.com/TimeForANinja/node-ytsr): YouTube search scraper ([DisTube Fork](https://github.com/distubejs/ytsr))
- [node-ytpl](https://github.com/TimeForANinja/node-ytpl): YouTube playlist resolver ([DisTube Fork](https://github.com/distubejs/ytpl))
- [youtube-dl-exec](https://github.com/microlinkhq/youtube-dl-exec): [`youtube-dl`](https://youtube-dl.org/) wrapper
