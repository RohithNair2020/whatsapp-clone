export interface User {
    _id: string;
    // name: String;
    userId: string;
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
