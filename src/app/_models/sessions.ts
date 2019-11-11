export interface UserProfile {  
    deleted: false;
    updatedAt: string;
    createdAt: string;
    version: string;
    id: string;
    country: string | null;
    city: string | null;
    emailAddress: string;
    profilePictureUri: string;
    providerUserId: string;
    lastName: string;
    firstName: string;
    mediaIngestionEndpoints: any[];
    devices: any[]
}
