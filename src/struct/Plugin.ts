/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Client, GuildTextBasedChannel } from "discord.js";
import type {
  Awaitable,
  DisTube,
  DisTubeEvents,
  DisTubeHandler,
  DisTubeVoiceManager,
  Options,
  PluginType,
  QueueManager,
  RelatedSong,
} from "..";

/**
 * DisTube Plugin
 *
 * @virtual
 */
export abstract class Plugin {
  abstract type: PluginType;
  distube!: DisTube;
  init(distube: DisTube) {
    /**
     * DisTube
     */
    this.distube = distube;
  }

  /**
   * Type of the plugin
   */
  /**
   * Emit an event to the {@link DisTube} class
   *
   * @param eventName - Event name
   * @param args      - arguments
   */
  emit(eventName: keyof DisTubeEvents, ...args: any): boolean {
    return this.distube.emit(eventName, ...args);
  }

  /**
   * Emit error event to the {@link DisTube} class
   *
   * @param error   - error
   * @param channel - Text channel where the error is encountered.
   */
  emitError(error: Error, channel?: GuildTextBasedChannel) {
    this.distube.emitError(error, channel);
  }

  /**
   * The queue manager
   */
  get queues(): QueueManager {
    return this.distube.queues;
  }

  /**
   * The voice manager
   */
  get voices(): DisTubeVoiceManager {
    return this.distube.voices;
  }

  /**
   * Discord.js client
   */
  get client(): Client {
    return this.distube.client;
  }

  /**
   * DisTube options
   */
  get options(): Options {
    return this.distube.options;
  }

  /**
   * DisTube handler
   */
  get handler(): DisTubeHandler {
    return this.distube.handler;
  }
  /**
   * Check if the string is working with this plugin
   *
   * @param _string - Input string
   */
  validate(_string: string): Awaitable<boolean> {
    return false;
  }
  /**
   * Get the stream url from {@link Song#url}. Returns {@link Song#url} by default.
   * Not needed if the plugin plays song from YouTube.
   *
   * @param url - Input url
   */
  getStreamURL(url: string): Awaitable<string> {
    return url;
  }
  /**
   * Get related songs from a supported url. {@link Song#member} should be
   * `undefined`. Not needed to add {@link Song#related} because it will be added
   * with this function later.
   *
   * @param _url - Input url
   */
  getRelatedSongs(_url: string): Awaitable<RelatedSong[]> {
    return [];
  }
}
