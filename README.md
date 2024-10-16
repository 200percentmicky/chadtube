# ChadTube
A fork of DisTube!

This fork is mainly used for [ChadMusic](https://github.com/200percentmicky/chadmusic), but can be used for your project if you like. It adds support for multiple filters with interchangable values during playback. All arguments for each provided filter can be changed at anytime, and static filters will no longer need to be provided when initializing the client.

The following has been changed:
- `FilterManager`
   - Live streams are refreshed when filters are applied.
   - `add()`, `remove()`, and `has()` have been removed. Instead, `set()` manages all filters within the manager.
   - `set()` parameters and types are as followed:
     - `set(filterName: string | undefined, filterValue: string | undefined) => Filter[]`
     - `filterName` is the name of the filter.
     - `filterValue` is the ffmpeg argument to provide to the filter.
- lodash has been added as a dependency.

> [!WARNING]
> I will only be providing support for the functionality that was altered or added in this fork. For all other issues pertaining to DisTube, please create an issue in the main repository instead.

...and now for something completely different.

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

A powerful Discord.js module for simplifying music commands and effortless playback of various sources with integrated audio filters.

[DisTube Support Server](https://discord.gg/feaDd9h) - [Frequently Asked Questions](https://discord.gg/feaDd9h)

## Features

- Easy Integration: Built on top of [discord.js](https://discord.js.org) v14 and [@discordjs/voice](https://discord.js.org).
- Voice and Queue Management: Handles voice channel connections, disconnections, and manages music queues efficiently.
- Audio Filters: Offers built-in audio filters (bassboost, echo, karaoke, etc.) and allows for custom filter implementations.
- Plugin System: Supports extensibility through plugins
  > DisTube does not have built-in support for music sources. You need to use plugins to add support for them.

## Requirement

- Node.js 18.17.0 or higher
- [discord.js](https://discord.js.org) v14
- [@discordjs/voice](https://github.com/discordjs/voice)
- [@discordjs/opus](https://github.com/discordjs/opus)
- [FFmpeg](https://www.ffmpeg.org/download.html)
- [sodium-native](https://www.npmjs.com/package/sodium-native)

## Documentation

Read DisTube's definitions, properties and events details in the [API Documentation page](https://distube.js.org/).

Learn how to build a music bot from scratch with [DisTube Guide](https://github.com/skick1234/DisTube/wiki)

[List of plugins](https://github.com/skick1234/DisTube/wiki/Projects-Hub#plugins) for supporting various sites
