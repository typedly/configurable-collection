// Interface.
import { CollectionSettings } from "../../lib";
import { ConfigurableCollectionShape } from "./configurable-collection.shape";
import { ConstrainedConstructor } from "@typedly/constructor";
// Type.
import { InferCollectionType, InferElement } from "../../inference";
import { InferAsync } from "@typedly/data";
import { InferSettings } from "@typedly/configurable-data";
/**
 * @description The constructor type for `ConfigurableCollection`.
 * @export
 * @interface ConfigurableCollectionConstructor
 * @template {CollectionSettings<E, T, R>} [C=CollectionSettings<E, T, R>] The collection settings type.
 * @template E The type of the elements in the collection.
 * @template T The type of the value in the collection, data of elements.
 * @template {boolean} [R=false] The boolean type indicates the async methods.
 * @template {CollectionShape<E, T, R>} [S=CollectionShape<E, T, R>] The collection shape type.
 * @extends {ConstrainedConstructor<CollectionShape<E, T, R>, S, [C, ...E[]]>}
 */
export interface ConfigurableCollectionConstructor<
  S extends ConfigurableCollectionShape<C, T, E, R>,
  C extends CollectionSettings<T, E, R> = InferSettings<S>,
  T extends Iterable<E> = InferCollectionType<C>,
  E = InferElement<C>,
  R extends boolean = InferAsync<C>,
> extends ConstrainedConstructor<
  ConfigurableCollectionShape<C, T, E, R>,
  S,
  [C, ...E[]]
>{}
