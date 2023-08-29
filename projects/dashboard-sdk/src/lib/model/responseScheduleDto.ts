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
import { Classroom } from './classroom';
import { Day } from './day';
import { Period } from './period';
import { Section } from './section';

export interface ResponseScheduleDto { 
    id: number;
    start: string;
    end: string;
    classroomId: number;
    classroom: Classroom;
    dayId: number;
    day: Day;
    sectionId: number;
    section: Section;
    periodId: number;
    period: Period;
    status: boolean;
}