export default class Response {
  private errors: Error[] = []

  private payload: any

  addErrors(errors: Error[]) {
    this.errors.push(...errors);
  }

  setPayload(payload: any) {
    this.payload = payload;
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  getResponse() {
    return {
      status: this.errors.length > 0 ? 'fail' : 'success',
      payload: this.errors.length > 0 ? undefined : this.payload,
      errors: this.errors,
    };
  }
}
