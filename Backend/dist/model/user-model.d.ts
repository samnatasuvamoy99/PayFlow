import { Schema } from "mongoose";
export declare const userModel: import("mongoose").Model<{
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
} & import("mongoose").DefaultTimestampProps & {
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
        email?: string | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        password?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        email?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
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
    email?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user-model.d.ts.map