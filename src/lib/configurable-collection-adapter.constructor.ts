// Interface.
import { CollectionSettings } from "@typedly/collection";
import { ConfigurableCollectionAdapter } from "./configurable-collection.adapter";
// Type.
import { AnyIterable, AnyIterableElement } from "@typedly/iterable";
import { InferAsyncOf } from "@typedly/data";
import { InferCollectionType } from "@typedly/collection";
import { InferSettings } from "@typedly/configurable-data";
/**
 * @description The configurable collection adapter constructor type, which defines the structure for creating instances of configurable collection adapters.
 * @export
 * @interface ConfigurableCollectionAdapterConstructor
 * @template {ConfigurableCollectionAdapter<C, T, E, S>} A The configurable collection adapter type.
 * @template {CollectionSettings<T, E, S>} [C=InferSettings<A>] The collection settings type to infer the collection type, element type, and async behavior from the adapter.
 * @template {AnyIterable<E>} [T=InferCollectionType<C, A>] The type of the iterable collection inferred from the collection settings or adapter, defaults to `unknown` if it cannot be inferred.
 * @template [E=AnyIterableElement<T>] The type of the collection inferred from the collection type `T`.
 * @template {boolean} [S=InferAsyncOf<[C, A]>] The boolean type indicates the async methods, inferred from the collection settings or adapter, defaults to `false` if it cannot be inferred.
 */
export interface ConfigurableCollectionAdapterConstructor<
  A extends ConfigurableCollectionAdapter<C, T, E, S>,
  C extends CollectionSettings<T, E, S> = InferSettings<A>,
  T extends AnyIterable<E> = InferCollectionType<C, A>,
  E = AnyIterableElement<T>,
  S extends boolean = InferAsyncOf<[C, A]>,
>{
  new (settings: C, ...elements: E[]): A;
}
