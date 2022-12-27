export interface User {
    _id: string;
    userId: string;
    name: string;
    phone: string;
    // contacts: [Object];
}

export interface ErrorType {
    message: string
    exception: string
}

export interface Message {
    sender: string,
    receiver: string,
    message: string
}

export interface KeyValue {
    key: string;
    value: string | number | boolean | null;
}

export interface GenericKeyValue<K, V> {
    key: K;
    value: V;
}

export interface MapKV extends Object {
    [name: string]: unknown,
}
