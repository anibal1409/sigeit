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

export interface UpdateSectionDto { 
    capacity?: number;
    name?: string;
    subject?: IdCreateEntity;
    period?: IdCreateEntity;
    teacher?: IdCreateEntity;
    status?: boolean;
    id?: number;
    inscribed?: number;
}