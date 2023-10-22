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
import { Period } from './period';
import { Subject } from './subject';
import { Teacher } from './teacher';

export interface Section { 
    name: string;
    capacity: number;
    inscribed: number;
    subject: Subject;
    period: Period;
    teacher: Teacher;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    status?: boolean;
    deleted?: boolean;
}