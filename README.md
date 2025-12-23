# ChadTube

A fork of DisTube!

This fork is mainly used for [ChadMusic](https://github.com/200percentmicky/chadmusic), but can be used for your project if you like. It adds support for multiple filters with interchangable values during playback. All arguments for each provided filter can be changed at anytime, and static filters will no longer need to be provided when initializing the client.

The following has been changed:

- `FilterManager`
  - Live streams are refreshed when filters are applied.
  - `add()`, `remove()`, and `has()` have been removed. Instead, `set()` manages all filters within the manager.
  - `set()` parameters and types are as followed:
    - `set(filterName: string | undefined, filterValue: string | undefined) => Filter[]`
    - `filterName` is the name of the filter. Providing a `null` value removes all active filters.
    - `filterValue` is the ffmpeg argument to provide to the filter. Providing a `null` value removes the specified filter.
- lodash has been added as a dependency.

> [!WARNING]
> I will only be providing support for the functionality that was altered or added in this fork. For all other issues pertaining to DisTube, please create an issue in the main repository instead.

...and now for something completely different.

---

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/distube" target="_blank"><img src="https://nodei.co/npm/distube.png?downloads=true&downloadRank=true&stars=true"/></a>
  </p>
  <p>
    <a href="https://github.com/skick1234/DisTube/actions" target="_blank"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/skick1234/DisTube/test.yml?branch=main&label=Tests&logo=github&style=flat-square" /></a>
    <a href="https://nodejs.org/" target="_blank"><img alt="node-current" src="https://img.shields.io/node/v/distube?logo=node.js&logoColor=white&style=flat-square"/></a>
    <a href="https://discord.js.org/" target="_blank"><img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/distube/peer/discord.js?label=discord.js&logo=discord&logoColor=white&style=flat-square"/></a>
    <a href="https://app.codecov.io/gh/skick1234/DisTube" target="_blank"><img alt="Codecov branch" src="https://img.shields.io/codecov/c/github/skick1234/DisTube/main?logo=codecov&logoColor=white&style=flat-square&token=WWDYRRSEQW"/></a>
    <br/>
    <a href="https://www.npmjs.com/package/distube" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/distube?logo=npm&style=flat-square"/></a>
    <a href="https://github.com/skick1234/DisTube/stargazers" target="_blank"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/skick1234/DisTube?logo=github&logoColor=white&style=flat-square"/></a>
    <a href="https://discord.gg/feaDd9h" target="_blank"><img alt="Discord" src="https://img.shields.io/discord/732254550689316914?logo=discord&logoColor=white&style=flat-square"/></a>
  </p>
  <p>
    <a href='https://ko-fi.com/skick' target='_blank'><img height='48' src='https://storage.ko-fi.com/cdn/kofi3.png' alt='Buy Me a Coffee at ko-fi.com' /></a>
  </p>
</div>

# DisTube

DisTube is a comprehensive Discord music bot library built for [Discord.js](https://discord.js.org), offering simplified music commands, effortless playback from diverse sources, and integrated audio filters.

## 🌟 Key Features

- **Easy Integration**: Built on top of [discord.js](https://discord.js.org) v14 and [@discordjs/voice](https://discord.js.org).
- **Voice Management**: Robust handling of voice connections and queue management.
- **Audio Filters**: Built-in filters (bassboost, echo, karaoke, etc.) and custom filter support.
- **Plugin System**: Extensible architecture supporting YouTube, Spotify, SoundCloud, and 700+ other sites.
- **Type Safety**: Written in TypeScript for a superior development experience.

## 📚 Resources

| Resource | Description |
| --- | --- |
| [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/skick1234/DisTube) | Learn DisTube with AI-powered assistance. |
| [Installation](https://deepwiki.com/skick1234/DisTube/Installation) | Detailed requirements and setup guide. |
| [API Reference](https://distube.js.org/) | Complete technical documentation. |
| [Discord Support](https://discord.gg/feaDd9h) | Join our community for help and discussion. |

## 🚀 Quick Start

```bash
npm install distube @discordjs/voice @discordjs/opus
```

```javascript
const { DisTube } = require('distube');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const distube = new DisTube(client, {
  emitNewSongOnly: true,
});

distube.on('playSong', (queue, song) =>
  queue.textChannel.send(`Playing \`${song.name}\` - \`${song.formatDuration()}\``)
);

client.on('messageCreate', message => {
  if (message.content.startsWith('!play')) {
    distube.play(message.member.voice.channel, message.content.slice(6), {
      message,
      textChannel: message.channel,
      member: message.member,
    });
  }
});

client.login('TOKEN');
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](https://github.com/skick1234/DisTube/blob/main/.github/CONTRIBUTING.md) before submitting a pull request.

## 📄 License

Licensed under [MIT License](https://github.com/skick1234/DisTube/blob/main/LICENSE)

---

<div align="center">
  <a href='https://ko-fi.com/skick' target='_blank'><img height='48' src='https://storage.ko-fi.com/cdn/kofi3.png' alt='Support me on Ko-fi' /></a>
</div>
