// Interface.
import { CollectionSettings } from "@typedly/collection";
import { ConfigurableCollectionAdapter } from "./configurable-collection.adapter";
// Type.
import { InferAsync } from "@typedly/data";
import { InferCollectionType, InferElement } from "@typedly/collection";
import { InferSettings } from "@typedly/configurable-data";
/**
 * @description The configurable collection adapter constructor type, which defines the structure for creating instances of configurable collection adapters.
 * @export
 * @interface ConfigurableCollectionAdapterConstructor
 * @template {ConfigurableCollectionAdapter<C, T, E, R>} A The configurable collection adapter type.
 * @template {CollectionSettings<T, E, R>} [C=InferSettings<A>] The collection settings type to infer the collection type, element type, and async behavior from the adapter.
 * @template [E=InferElement<C, A>] The type of the collection inferred from the collection settings or adapter, defaults to `unknown` if it cannot be inferred.
 * @template {Iterable<E>} [T=InferCollectionType<C, A>] The type of the iterable collection inferred from the collection settings or adapter, defaults to `unknown` if it cannot be inferred.
 * @template {boolean} [R=InferAsync<C, A>] The boolean type indicates the async methods, inferred from the collection settings or adapter, defaults to `false` if it cannot be inferred.
 */
export interface ConfigurableCollectionAdapterConstructor<
  A extends ConfigurableCollectionAdapter<C, T, E, R>,
  C extends CollectionSettings<T, E, R> = InferSettings<A>,
  T extends Iterable<E> = InferCollectionType<C, A>,
  E = InferElement<C, A>,
  R extends boolean = InferAsync<C, A>,
>{
  new (settings: C, ...elements: E[]): A;
}
