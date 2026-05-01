// Interface.
import type { CollectionConfig, CollectionShape, CollectionSettings } from "@typedly/collection";
import type { ConfigurableDataShape } from "@typedly/configurable-data";
// Type.
import type { InferAsync, IterableElement } from "@typedly/data";
import type { InferCollectionType, InferElement } from "@typedly/collection";
/**
 * @description The shape of configurable collection data structure, which can be implemented by various types of collections such as sets, arrays, or maps.
 * It extends the `CollectionShape` interface, allowing it to inherit collection-specific functionalities while also introducing configurability through the `C` of `CollectionSettings` and `ConfigurableDataShape`.
 * @export
 * @interface ConfigurableCollectionShape
 * @template {CollectionSettings<T, E, S>} C The configuration type that extends `CollectionSettings` with element type `E`, collection type `T`, and async behavior `R`. Defaults to an empty object if not provided.
 * @template [E=InferElement<C>] The element type inferred from the configuration, or defaults to `unknown` if not specified.
 * @template {Iterable<E>} [T=InferCollectionType<C>] The collection type inferred from the configuration, or defaults to `unknown` if not specified.
 * @template {boolean} [S=InferAsync<C>] The async behavior flag inferred from the configuration, or defaults to `false` if not specified.
 * @extends {ConfigurableDataShape<C, T, S>} The configurable data-related functionalities defined in `ConfigurableDataShape`.
 * @extends {CollectionShape<T, E, S>} The base collection functionalities defined in `CollectionShape`.
 */
export interface ConfigurableCollectionShape<
  C extends CollectionSettings<T, E, S>,
  T extends Iterable<E>,
  E = IterableElement<T>,
  S extends boolean = InferAsync<C>
> extends ConfigurableDataShape<C, T, S>, CollectionShape<T, E, S> {
  /**
   * @description The configuration settings for the collection, defining its behavior and structure.
   * @type {CollectionConfig<C, T, E, S>}
   */
  configuration: CollectionConfig<C, T, E, S>;

  /**
   * @description Updates the collection's configuration settings and returns a new collection instance with the updated settings.
   * @param {Partial<NC>} settings The new configuration settings for the collection.
   * @returns {ConfigurableCollectionShape<NC, T, E, S>} A new collection instance with the updated settings.
   */
  with?<NC extends CollectionSettings<T, E, S>>(settings: Partial<NC>): ConfigurableCollectionShape<NC, T, E, S>;
}
