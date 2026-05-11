// Interface.
import { CollectionSettings } from "@typedly/collection";
import { ConfigurableCollectionShape } from "./configurable-collection.shape";
import { ConstrainedConstructor } from "@typedly/constructor";
// Type.
import { InferAsyncOf } from "@typedly/data";
import { InferCollectionType } from "@typedly/collection";
import { InferSettings } from "@typedly/configurable-data";
import { AnyIterable, AnyIterableElement } from "@typedly/iterable";
/**
 * @description The constructor type for `ConfigurableCollection`.
 * @export
 * @interface ConfigurableCollectionConstructor
 * @template {ConfigurableCollectionShape<C, T, E, S>} I The collection shape type that the constructor will create instances of.
 * @template {CollectionSettings<T, E, S>} [C=InferSettings<I>] The collection settings type.
 * @template {AnyIterable<E>} [T=InferCollectionType<C, I>] The collection type inferred from the collection settings or shape, defaults to `unknown` if it cannot be inferred.
 * @template [E=AnyIterableElement<T>] The element type inferred from the collection type `T`.
 * @template {boolean} [S=InferAsyncOf<[C, I]>] The boolean type indicates the async methods, inferred from the collection settings or shape, defaults to `false` if it cannot be inferred.
 * @extends {ConstrainedConstructor<ConfigurableCollectionShape<C, T, E, S>, I, [C, ...E[]]>}
 */
export interface ConfigurableCollectionConstructor<
  I extends ConfigurableCollectionShape<C, T, E, S>,
  C extends CollectionSettings<T, E, S> = InferSettings<I>,
  T extends AnyIterable<E> = InferCollectionType<C, I>,
  E = AnyIterableElement<T>,
  S extends boolean = InferAsyncOf<[C, I]>,
> extends ConstrainedConstructor<
  ConfigurableCollectionShape<C, T, E, S>,
  I,
  [C, ...E[]]
>{}
