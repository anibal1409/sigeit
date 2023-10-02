/**
 * SIGEIT-API
 * The SIGEIT-APIdescription
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Period { 
    name: string;
    description?: string;
    start: Date;
    end: Date;
    startTime: string;
    endTime: string;
    interval: number;
    duration: number;
    stage: Period.StageEnum;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status?: boolean;
    deleted?: boolean;
}
export namespace Period {
    export type StageEnum = 'TO_PLAN' | 'PLANNED' | 'FINALIZED';
    export const StageEnum = {
        TOPLAN: 'TO_PLAN' as StageEnum,
        PLANNED: 'PLANNED' as StageEnum,
        FINALIZED: 'FINALIZED' as StageEnum
    };
}