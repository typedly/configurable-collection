// Interface.
import { CollectionSettings } from "@typedly/collection";
import { ConfigurableCollectionShape } from "./configurable-collection.shape";
// Type.
import { AnyIterable, AnyIterableElement } from "@typedly/iterable";
import { InferAsync } from "@typedly/data";
import { InferCollectionType } from "@typedly/collection";
/**
 * @description The `ConfigurableCollectionAdapter` interface defines a adapter collection data structure that can be configured based on the provided settings.
 * It extends the `ConfigurableCollectionShape` interface, allowing it to inherit collection-specific functionalities while also supporting configurability through the settings pattern.
 * @export
 * @interface ConfigurableCollectionAdapter
 * @template {CollectionSettings<T, E, S>} C The collection settings type.
 * @template {AnyIterable<E>} [T=InferCollectionType<C>] The type of the collection inferred from the collection settings or defaults to `unknown` if not specified.
 * @template [E=AnyIterableElement<T>] The element type inferred from the collection type `T`.
 * @template {boolean} [S=InferAsync<C>] The async behavior flag inferred from the collection settings or defaults to `false` if not specified.
 * @extends {ConfigurableCollectionShape<C, T, E, S>}
 */
export interface ConfigurableCollectionAdapter<
  C extends CollectionSettings<T, E, S>,
  T extends AnyIterable<E> = InferCollectionType<C>,
  E = AnyIterableElement<T>,
  S extends boolean = InferAsync<C>,
> extends ConfigurableCollectionShape<C, T, E, S> {
  readonly version: string;
}
