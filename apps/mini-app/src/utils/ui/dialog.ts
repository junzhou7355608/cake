// import type { DialogLoadingParams, DialogParams } from '@/hooks/use-dialogs'
// import { EmitKey, StorageKey } from '@/constants/enums'
// import * as Storage from 'expo-secure-store'
// import emitter from '../emit'

/**
 * 显示弹窗
 *
 */
// async function show(dialogParams: DialogParams) {
//   return new Promise<boolean | undefined>((resolve, reject) => {
//     emitter.emit(EmitKey.ShowDialog, {
//       ...dialogParams,
//       onOk: () => {
//         dialogParams.onOk?.()
//         resolve(true)
//       },
//       onCancel: () => {
//         dialogParams.onCancel?.()
//         reject(new Error('Dialog was cancelled'))
//       },
//     })
//   })
// }

/**
 * 隐藏弹窗
 *
 */
// function hide() {
//   emitter.emit(EmitKey.HideDialog)
// }

/**
 * 显示弹窗 Loading
 *
 */
// function showLoading(dialogParams: DialogLoadingParams) {
//   emitter.emit(EmitKey.ShowDialogLoading, dialogParams)
// }

/**
 * 隐藏弹窗 Loading
 *
 */
// function hideLoading() {
//   emitter.emit(EmitKey.HideDialogLoading)
// }

// const dialog = {
//   show,
//   hide,
//   showLoading,
//   hideLoading,
// }

// export { dialosg as default }
