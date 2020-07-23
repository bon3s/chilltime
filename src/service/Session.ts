export class Session {
    public static fromJSON(maybe: any) {
        if (!maybe) {
            throw new Error('SessionType should be an object');
        }

        if (typeof maybe.success !== 'boolean') {
            throw new Error('success should be a boolean');
        }

        if (typeof maybe.guest_session_id !== 'string') {
            throw new Error('guest_session_id should be a number');
        }

        if (typeof maybe.expires_at !== 'string') {
            throw new Error('expires_at should be a number');
        }

        return new Session(
            maybe.success,
            maybe.guest_session_id,
            maybe.expires_at
        );
    }

    public success: boolean;
    public guestSessionID: string;
    public expiresAt: string;

    constructor(success: boolean, guestSessionID: string, expiresAt: string) {
        this.success = success;
        this.guestSessionID = guestSessionID;
        this.expiresAt = expiresAt;
    }
}
