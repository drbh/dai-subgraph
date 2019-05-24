import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Mint extends EthereumEvent {
  get params(): Mint__Params {
    return new Mint__Params(this);
  }
}

export class Mint__Params {
  _event: Mint;

  constructor(event: Mint) {
    this._event = event;
  }

  get guy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Burn extends EthereumEvent {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get guy(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogSetAuthority extends EthereumEvent {
  get params(): LogSetAuthority__Params {
    return new LogSetAuthority__Params(this);
  }
}

export class LogSetAuthority__Params {
  _event: LogSetAuthority;

  constructor(event: LogSetAuthority) {
    this._event = event;
  }

  get authority(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogSetOwner extends EthereumEvent {
  get params(): LogSetOwner__Params {
    return new LogSetOwner__Params(this);
  }
}

export class LogSetOwner__Params {
  _event: LogSetOwner;

  constructor(event: LogSetOwner) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogNote extends EthereumEvent {
  get params(): LogNote__Params {
    return new LogNote__Params(this);
  }
}

export class LogNote__Params {
  _event: LogNote;

  constructor(event: LogNote) {
    this._event = event;
  }

  get sig(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get foo(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get bar(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get wad(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fax(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get guy(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get src(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get dst(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get wad(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  name(): Bytes {
    let result = super.call("name", []);
    return result[0].toBytes();
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", []);
    return result[0].toBigInt();
  }

  decimals(): BigInt {
    let result = super.call("decimals", []);
    return result[0].toBigInt();
  }

  balanceOf(src: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(src)]);
    return result[0].toBigInt();
  }

  stopped(): boolean {
    let result = super.call("stopped", []);
    return result[0].toBoolean();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  symbol(): Bytes {
    let result = super.call("symbol", []);
    return result[0].toBytes();
  }

  authority(): Address {
    let result = super.call("authority", []);
    return result[0].toAddress();
  }

  allowance(src: Address, guy: Address): BigInt {
    let result = super.call("allowance", [
      EthereumValue.fromAddress(src),
      EthereumValue.fromAddress(guy)
    ]);
    return result[0].toBigInt();
  }
}
