import type { Request, Response } from "express";
export declare const bankBalance: (req: Request, res: Response) => Promise<void>;
export declare const transferMoney: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=bank.controller.d.ts.map