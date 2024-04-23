import { DisTubeError, StreamType, checkInvalidKey, defaultOptions } from "..";
import type ytdl from "@distube/ytdl-core";
import type { CustomPlugin, DisTubeOptions, ExtractorPlugin, FFmpegOptions, Filters } from "..";
import type { Cookie } from "@distube/ytdl-core";

export class Options {
  plugins: (CustomPlugin | ExtractorPlugin)[];
  emitNewSongOnly: boolean;
  leaveOnFinish: boolean;
  leaveOnStop: boolean;
  leaveOnEmpty: boolean;
  emptyCooldown: number;
  savePreviousSongs: boolean;
  searchSongs: number;
  searchCooldown: number;
  youtubeCookie?: Cookie[] | string;
  customFilters?: Filters;
  ytdlOptions: ytdl.getInfoOptions;
  nsfw: boolean;
  emitAddSongWhenCreatingQueue: boolean;
  emitAddListWhenCreatingQueue: boolean;
  joinNewVoiceChannel: boolean;
  streamType: StreamType;
  directLink: boolean;
  ffmpegPath: string;
  ffmpegDefaultArgs: FFmpegOptions;
  constructor(options: DisTubeOptions) {
    if (typeof options !== "object" || Array.isArray(options)) {
      throw new DisTubeError("INVALID_TYPE", "object", options, "DisTubeOptions");
    }
    const opts = { ...defaultOptions, ...options };
    this.plugins = opts.plugins;
    this.emitNewSongOnly = opts.emitNewSongOnly;
    this.leaveOnEmpty = opts.leaveOnEmpty;
    this.leaveOnFinish = opts.leaveOnFinish;
    this.leaveOnStop = opts.leaveOnStop;
    this.savePreviousSongs = opts.savePreviousSongs;
    this.searchSongs = opts.searchSongs;
    this.youtubeCookie = opts.youtubeCookie;
    this.customFilters = opts.customFilters;
    this.ytdlOptions = opts.ytdlOptions;
    this.searchCooldown = opts.searchCooldown;
    this.emptyCooldown = opts.emptyCooldown;
    this.nsfw = opts.nsfw;
    this.emitAddSongWhenCreatingQueue = opts.emitAddSongWhenCreatingQueue;
    this.emitAddListWhenCreatingQueue = opts.emitAddListWhenCreatingQueue;
    this.joinNewVoiceChannel = opts.joinNewVoiceChannel;
    this.streamType = opts.streamType;
    this.directLink = opts.directLink;
    this.ffmpegPath = opts.ffmpegPath;
    this.ffmpegDefaultArgs = opts.ffmpegDefaultArgs;
    checkInvalidKey(opts, this, "DisTubeOptions");
    this.#validateOptions();
    if (this.youtubeDL) {
      process.emitWarning(
        "DisTubeOptions.youtubeDL is deprecated, set it to false and use `@distube/yt-dlp` instead.",
        "DeprecationWarning",
      );
    }
  }

  #validateOptions(options = this) {
    const booleanOptions = new Set([
      "emitNewSongOnly",
      "leaveOnEmpty",
      "leaveOnFinish",
      "leaveOnStop",
      "savePreviousSongs",
      "joinNewVoiceChannel",
      "nsfw",
      "emitAddSongWhenCreatingQueue",
      "emitAddListWhenCreatingQueue",
      "directLink",
    ]);
    const numberOptions = new Set(["searchCooldown", "emptyCooldown", "searchSongs"]);
    const stringOptions = new Set(["ffmpegPath"]);
    const objectOptions = new Set(["customFilters", "ytdlOptions", "ffmpegDefaultArgs"]);
    const optionalOptions = new Set(["youtubeCookie", "customFilters"]);

    for (const [key, value] of Object.entries(options)) {
      if (value === undefined && optionalOptions.has(key)) continue;
      if (key === "youtubeCookie" && !Array.isArray(value) && typeof value !== "string") {
        throw new DisTubeError("INVALID_TYPE", ["Array<Cookie>", "string"], value, `DisTubeOptions.${key}`);
      } else if (key === "streamType" && (typeof value !== "number" || isNaN(value) || !StreamType[value])) {
        throw new DisTubeError("INVALID_TYPE", "StreamType", value, `DisTubeOptions.${key}`);
      } else if (key === "plugins" && !Array.isArray(value)) {
        throw new DisTubeError("INVALID_TYPE", "Array<Plugin>", value, `DisTubeOptions.${key}`);
      } else if (booleanOptions.has(key)) {
        if (typeof value !== "boolean") {
          throw new DisTubeError("INVALID_TYPE", "boolean", value, `DisTubeOptions.${key}`);
        }
      } else if (numberOptions.has(key)) {
        if (typeof value !== "number" || isNaN(value)) {
          throw new DisTubeError("INVALID_TYPE", "number", value, `DisTubeOptions.${key}`);
        }
      } else if (stringOptions.has(key)) {
        if (typeof value !== "string") {
          throw new DisTubeError("INVALID_TYPE", "string", value, `DisTubeOptions.${key}`);
        }
      } else if (objectOptions.has(key)) {
        if (typeof value !== "object" || Array.isArray(value)) {
          throw new DisTubeError("INVALID_TYPE", "object", value, `DisTubeOptions.${key}`);
        }
      }
    }
  }
}
