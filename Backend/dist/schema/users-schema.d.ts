import { z } from "zod";
export declare const signupSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    userName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const signinSchema: z.ZodObject<{
    userName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=users-schema.d.ts.map