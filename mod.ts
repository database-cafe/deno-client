export class Client {
  endpoint: string;

  constructor(endpoint: string = "https://database.cafe/api") {
    this.endpoint = endpoint;
  }

  async listStructs(): Promise<Struct[]> {
    const response = await fetch(`${this.endpoint}/structs`);
    const data = await response.json();
    if (data.Error !== "") {
      throw new Error(data.Error);
    }
    return data.Data;
  }
}

export interface Struct {
  Name: string;
  PluralName: string;
  Fields: Field[];
}

export interface Field {
  Name: string;
  Description: string;
  TypeID: string;
  DefaultValue: string;
}
