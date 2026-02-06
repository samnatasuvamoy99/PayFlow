import type { Request, Response } from "express";
export declare const signupUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const signinUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateDetailsUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const filterUsersData: (req: Request, res: Response) => Promise<void>;
export declare const getUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=user.controller.d.ts.map