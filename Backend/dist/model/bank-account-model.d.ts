import mongoose from "mongoose";
export declare const accountModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    balance: number;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    balance: number;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    balance: number;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    balance: number;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    userId: mongoose.Types.ObjectId;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        balance: number;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        userId: mongoose.Types.ObjectId;
        balance: number;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    balance: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=bank-account-model.d.ts.map