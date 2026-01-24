import { Schema } from "mongoose";
export declare const userModel: import("mongoose").Model<{
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
}, import("mongoose").Document<unknown, {}, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        password?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        username?: string | null;
        email?: string | null;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        password?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        username?: string | null;
        email?: string | null;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    username?: string | null;
    email?: string | null;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user-schema.d.ts.map