import { BaseManager } from ".";
import type { FilterResolvable, Queue } from "../..";
import _ from "lodash";

/**
 * Manage filters of a playing {@link Queue}
 * @extends {BaseManager}
 */
export class FilterManager extends BaseManager<FilterResolvable> {
  [x: string]: any;
  /**
   * Collection of {@link FilterResolvable}.
   * @name FilterManager#collection
   * @type {Discord.Collection<string, DisTubeVoice>}
   */
  queue: Queue;
  constructor(queue: Queue) {
    super(queue.distube);
    this.queue = queue;
    this.filters = [];
  }

  #resolveName(filter: FilterResolvable): string {
    return typeof filter === "string" ? filter : filter.name;
  }

  #resolveValue(filter: FilterResolvable): string {
    return typeof filter === "string" ? this.distube.filters[filter] : filter.value;
  }

  #apply() {
    if (!this.queue.songs[0].isLive) {
      this.queue.beginTime = this.queue.currentTime;
    }
    this.queues.playSong(this.queue);
  }

  /**
   * Clear enabled filters of the manager
   * @returns {FilterManager}
   */
  clear() {
    return this.set();
  }

  /**
   * Set the filters applied to the manager.
   * 
   * @param {string | null} filterName The name of the filter, or null to remove all filters.
   * @param {string | undefined} filterValue The value of the filter, or undefined to remove the filter.
   * @returns {Array<string>}
   */
  set(filterName: string | undefined = undefined, filterValue: string | undefined = undefined) {
    const filterList = this.filters?.find((x: { name: string | null; }) => x.name === filterName);
    if (filterName && !filterValue) { // Assuming that you want to remove the filter.
      if (!this.filters) throw new TypeError("No filters are applied to the player.");
      if (!filterList) throw new TypeError(`The filter ${filterName} is not applied to the player.`)
      _.remove(this.filters, n => n === filterList);
    }
    if (!filterList) {
      if (!filterName) {
        if (this.filters?.length === 0) throw new TypeError("No filters are applied to the player.");
        this.filters = [];
      } else {
        const filterPush = {
          name: filterName,
          values: filterValue
        }
        this.filters?.push(filterPush)
      }
    } else {
      filterList.values = filterValue;
    }
    this.#apply()
    return this.filters;
  }

  /**
   * Array of enabled filter name
   * @type {Array<string>}
   * @readonly
   */
  get names() {
    return this.collection.map(f => this.#resolveName(f));
  }

  get values() {
    return this.collection.map(f => this.#resolveValue(f));
  }

  override toString() {
    return this.names.toString();
  }
}
