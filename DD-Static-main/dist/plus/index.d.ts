import { createPlusAuthModule } from "./enigma-module";
export declare class PlusClient {
    setSessionToken(token: string): Promise<void>;
    getSessionToken(): Promise<string | null>;
    clearSessionToken(): Promise<void>;
    setAccessToken(token: string): Promise<void>;
    getAccessToken(): Promise<string | null>;
    clearAccessToken(): Promise<void>;
    authenticate(accessToken: string, authUrl?: string): Promise<string>;
    validateSession(validateUrl?: string): Promise<boolean>;
    createEnigmaModule(): import("@nightnetwork/enigma").EnigmaModule;
}
export default PlusClient;
export { createPlusAuthModule };
