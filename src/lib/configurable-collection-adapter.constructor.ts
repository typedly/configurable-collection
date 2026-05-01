// Interface.
import { CollectionSettings } from "@typedly/collection";
import { ConfigurableCollectionAdapter } from "./configurable-collection.adapter";
// Type.
import { InferAsyncOf, IterableElement } from "@typedly/data";
import { InferCollectionType } from "@typedly/collection";
import { InferSettings } from "@typedly/configurable-data";
/**
 * @description The configurable collection adapter constructor type, which defines the structure for creating instances of configurable collection adapters.
 * @export
 * @interface ConfigurableCollectionAdapterConstructor
 * @template {ConfigurableCollectionAdapter<C, T, E, S>} A The configurable collection adapter type.
 * @template {CollectionSettings<T, E, S>} [C=InferSettings<A>] The collection settings type to infer the collection type, element type, and async behavior from the adapter.
 * @template {Iterable<E>} [T=InferCollectionType<C, A>] The type of the iterable collection inferred from the collection settings or adapter, defaults to `unknown` if it cannot be inferred.
 * @template [E=IterableElement<T>] The type of the collection inferred from the collection type `T`.
 * @template {boolean} [S=InferAsyncOf<[C, A]>] The boolean type indicates the async methods, inferred from the collection settings or adapter, defaults to `false` if it cannot be inferred.
 */
export interface ConfigurableCollectionAdapterConstructor<
  A extends ConfigurableCollectionAdapter<C, T, E, S>,
  C extends CollectionSettings<T, E, S> = InferSettings<A>,
  T extends Iterable<E> = InferCollectionType<C, A>,
  E = IterableElement<T>,
  S extends boolean = InferAsyncOf<[C, A]>,
>{
  new (settings: C, ...elements: E[]): A;
}
