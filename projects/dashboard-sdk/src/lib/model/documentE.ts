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
import { Department } from './department';

export interface DocumentE { 
    name: string;
    description: string;
    type: DocumentE.TypeEnum;
    department?: Department;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status?: boolean;
    deleted?: boolean;
}
export namespace DocumentE {
    export type TypeEnum = 'academic_charge';
    export const TypeEnum = {
        AcademicCharge: 'academic_charge' as TypeEnum
    };
}