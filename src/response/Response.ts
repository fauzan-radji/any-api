export default class Response {
  static success(
    data: any,
    message?: string,
    additionalData?: { [key: string]: any }
  ) {
    return {
      message: message || "Success",
      data,
      ...additionalData,
    };
  }

  static error(message: string) {
    return {
      message,
    };
  }
}
