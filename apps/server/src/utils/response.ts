export function formatResponse<T>(data: T, message = 'success', code = 200) {
  return {
    code,
    message,
    data
  }
}
