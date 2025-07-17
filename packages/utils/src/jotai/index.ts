/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Atom,
  createStore,
  ExtractAtomArgs,
  ExtractAtomResult,
  ExtractAtomValue,
  WritableAtom
} from 'jotai'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

type SetAtom<Args extends any[], Result> = (...args: Args) => Result
type Store = ReturnType<typeof createStore>

/**
 * 创建 store 访问器
 * @param store
 * @returns 包含不同 hook 的数组
 */
export function createStoreAccessor(store: Store) {
  /**
   * alias useAtom
   * @param atom
   * @returns 返回值和 setter 函数
   */
  function useStoreAtom<Value, Args extends any[], Result>(
    atom: WritableAtom<Value, Args, Result>
  ): [Awaited<Value>, SetAtom<Args, Result>]
  function useStoreAtom<AtomType extends WritableAtom<any, any[], any>>(
    atom: AtomType
  ): [
    Awaited<ExtractAtomValue<AtomType>>,
    SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>
  ]
  function useStoreAtom<AtomType extends Atom<any>>(
    atom: AtomType
  ): [Awaited<ExtractAtomValue<AtomType>>, never]
  function useStoreAtom<Value>(atom: Atom<Value>) {
    return useAtom(atom)
  }

  /**
   * alias useAtomValue
   * @param atom
   * @returns 返回 atom 的当前值
   */
  function useStoreAtomValue<AtomType extends Atom<any>>(
    atom: AtomType
  ): Awaited<ExtractAtomValue<AtomType>>
  function useStoreAtomValue<Value>(atom: Atom<Value>) {
    return useAtomValue(atom, { store })
  }

  /**
   * alias useSetAtom
   * @param atom
   * @returns 返回设置 atom 的函数
   */
  function useSetStoreAtom<AtomType extends WritableAtom<any, any[], any>>(
    atom: AtomType
  ): SetAtom<ExtractAtomArgs<AtomType>, ExtractAtomResult<AtomType>>
  function useSetStoreAtom<Value, Args extends any[], Result>(
    atom: WritableAtom<Value, Args, Result>
  ) {
    return useSetAtom(atom, { store })
  }

  /**
   * alias store.set
   * @param atom
   * @param args - 调用 store.set 方法设置 atom 值的参数
   * @returns {void} 不返回任何值
   */
  function setStoreAtom<Value, Args extends any[], Result>(
    atom: WritableAtom<Value, Args, Result>,
    ...args: Args
  ): void {
    store.set(atom, ...args)
  }

  return [
    useStoreAtomValue,
    useSetStoreAtom,
    useStoreAtom,
    setStoreAtom
  ] as const
}
