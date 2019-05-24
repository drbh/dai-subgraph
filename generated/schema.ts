import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Mint entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Mint entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Mint", id.toString(), this);
  }

  static load(id: string): Mint | null {
    return store.get("Mint", id) as Mint | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get guy(): Bytes {
    let value = this.get("guy");
    return value.toBytes();
  }

  set guy(value: Bytes) {
    this.set("guy", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Burn entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Burn entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Burn", id.toString(), this);
  }

  static load(id: string): Burn | null {
    return store.get("Burn", id) as Burn | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get guy(): Bytes {
    let value = this.get("guy");
    return value.toBytes();
  }

  set guy(value: Bytes) {
    this.set("guy", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}

export class LogSetAuthority extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetAuthority entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetAuthority entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetAuthority", id.toString(), this);
  }

  static load(id: string): LogSetAuthority | null {
    return store.get("LogSetAuthority", id) as LogSetAuthority | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get authority(): Bytes {
    let value = this.get("authority");
    return value.toBytes();
  }

  set authority(value: Bytes) {
    this.set("authority", Value.fromBytes(value));
  }
}

export class LogSetOwner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogSetOwner entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogSetOwner entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogSetOwner", id.toString(), this);
  }

  static load(id: string): LogSetOwner | null {
    return store.get("LogSetOwner", id) as LogSetOwner | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class LogNote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save LogNote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save LogNote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("LogNote", id.toString(), this);
  }

  static load(id: string): LogNote | null {
    return store.get("LogNote", id) as LogNote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get sig(): Bytes {
    let value = this.get("sig");
    return value.toBytes();
  }

  set sig(value: Bytes) {
    this.set("sig", Value.fromBytes(value));
  }

  get guy(): Bytes {
    let value = this.get("guy");
    return value.toBytes();
  }

  set guy(value: Bytes) {
    this.set("guy", Value.fromBytes(value));
  }

  get foo(): Bytes {
    let value = this.get("foo");
    return value.toBytes();
  }

  set foo(value: Bytes) {
    this.set("foo", Value.fromBytes(value));
  }

  get bar(): Bytes {
    let value = this.get("bar");
    return value.toBytes();
  }

  set bar(value: Bytes) {
    this.set("bar", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }

  get fax(): Bytes {
    let value = this.get("fax");
    return value.toBytes();
  }

  set fax(value: Bytes) {
    this.set("fax", Value.fromBytes(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Approval entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Approval entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Approval", id.toString(), this);
  }

  static load(id: string): Approval | null {
    return store.get("Approval", id) as Approval | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get src(): Bytes {
    let value = this.get("src");
    return value.toBytes();
  }

  set src(value: Bytes) {
    this.set("src", Value.fromBytes(value));
  }

  get guy(): Bytes {
    let value = this.get("guy");
    return value.toBytes();
  }

  set guy(value: Bytes) {
    this.set("guy", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get src(): Bytes {
    let value = this.get("src");
    return value.toBytes();
  }

  set src(value: Bytes) {
    this.set("src", Value.fromBytes(value));
  }

  get dst(): Bytes {
    let value = this.get("dst");
    return value.toBytes();
  }

  set dst(value: Bytes) {
    this.set("dst", Value.fromBytes(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}
