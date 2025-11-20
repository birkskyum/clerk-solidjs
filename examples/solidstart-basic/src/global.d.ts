/// <reference types="@solidjs/start/env" />
/// <reference types="@solidjs/start/server" />
import { auth } from "clerk-solidjs-solidstart/start/server";

declare module "@solidjs/start/server" {
  export interface RequestEventLocals {
    auth: typeof auth;
  }
}

export {};
