import { BaseManager } from ".";
import _ from "lodash";
import type { FFmpegOptions, Filter, Queue } from "../..";

/**
 * Manage filters of a playing {@link Queue}
 */
export class FilterManager extends BaseManager<Filter> {
  /**
   * Collection of {@link Filter}.
   */
  queue: Queue;
  filters: any[];
  constructor(queue: Queue) {
    super(queue.distube);
    this.queue = queue;
    this.filters = [];
  }

  #apply() {
    if (!this.queue.songs[0].isLive) {
      this.queue.beginTime = this.queue.currentTime;
    }
    this.queues.playSong(this.queue);
  }

  /**
   * Clear enabled filters of the manager
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
   * Array of enabled filter names
   */
  get names(): string[] {
    return [...this.collection.keys()];
  }

  /**
   * Array of enabled filters
   */
  get values(): Filter[] {
    return [...this.collection.values()];
  }

  get ffmpegArgs(): FFmpegOptions {
    return this.size ? { af: this.values.map(f => f.value).join(",") } : {};
  }

  override toString() {
    return this.names.toString();
  }
}
