/**
 * SM-SOC
 * The SM-SOC API description
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CreatePublicationDto } from '../model/createPublicationDto';
import { PublicationRespondeDto } from '../model/publicationRespondeDto';
import { UpdatePublicationDto } from '../model/updatePublicationDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PublicationsService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publicationsControllerCreate(body: CreatePublicationDto, observe?: 'body', reportProgress?: boolean): Observable<PublicationRespondeDto>;
    public publicationsControllerCreate(body: CreatePublicationDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PublicationRespondeDto>>;
    public publicationsControllerCreate(body: CreatePublicationDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PublicationRespondeDto>>;
    public publicationsControllerCreate(body: CreatePublicationDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling publicationsControllerCreate.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<PublicationRespondeDto>('post',`${this.basePath}/publications`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publicationsControllerFindAll(observe?: 'body', reportProgress?: boolean): Observable<Array<PublicationRespondeDto>>;
    public publicationsControllerFindAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PublicationRespondeDto>>>;
    public publicationsControllerFindAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PublicationRespondeDto>>>;
    public publicationsControllerFindAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<PublicationRespondeDto>>('get',`${this.basePath}/publications`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publicationsControllerFindOne(id: number, observe?: 'body', reportProgress?: boolean): Observable<PublicationRespondeDto>;
    public publicationsControllerFindOne(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PublicationRespondeDto>>;
    public publicationsControllerFindOne(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PublicationRespondeDto>>;
    public publicationsControllerFindOne(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling publicationsControllerFindOne.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PublicationRespondeDto>('get',`${this.basePath}/publications/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publicationsControllerRemove(id: number, observe?: 'body', reportProgress?: boolean): Observable<PublicationRespondeDto>;
    public publicationsControllerRemove(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PublicationRespondeDto>>;
    public publicationsControllerRemove(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PublicationRespondeDto>>;
    public publicationsControllerRemove(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling publicationsControllerRemove.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<PublicationRespondeDto>('delete',`${this.basePath}/publications/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publicationsControllerUpdate(body: UpdatePublicationDto, id: number, observe?: 'body', reportProgress?: boolean): Observable<PublicationRespondeDto>;
    public publicationsControllerUpdate(body: UpdatePublicationDto, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PublicationRespondeDto>>;
    public publicationsControllerUpdate(body: UpdatePublicationDto, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PublicationRespondeDto>>;
    public publicationsControllerUpdate(body: UpdatePublicationDto, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling publicationsControllerUpdate.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling publicationsControllerUpdate.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<PublicationRespondeDto>('patch',`${this.basePath}/publications/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}