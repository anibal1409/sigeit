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
import { IdCreateEntity } from './idCreateEntity';

export interface CreateUserDto { 
    email: CreateUserDto.EmailEnum;
    role: CreateUserDto.RoleEnum;
    teacher?: IdCreateEntity;
    status: boolean;
    school?: IdCreateEntity;
    department?: IdCreateEntity;
    id?: number;
    name?: string;
}
export namespace CreateUserDto {
    export type EmailEnum = 'admin' | 'director' | 'head-department' | 'planner' | 'teacher';
    export const EmailEnum = {
        Admin: 'admin' as EmailEnum,
        Director: 'director' as EmailEnum,
        HeadDepartment: 'head-department' as EmailEnum,
        Planner: 'planner' as EmailEnum,
        Teacher: 'teacher' as EmailEnum
    };
    export type RoleEnum = 'admin' | 'director' | 'head-department' | 'planner' | 'teacher';
    export const RoleEnum = {
        Admin: 'admin' as RoleEnum,
        Director: 'director' as RoleEnum,
        HeadDepartment: 'head-department' as RoleEnum,
        Planner: 'planner' as RoleEnum,
        Teacher: 'teacher' as RoleEnum
    };
}