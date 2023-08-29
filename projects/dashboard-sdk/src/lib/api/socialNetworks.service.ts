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

import { CreateSocialNetworkDto } from '../model/createSocialNetworkDto';
import { ResponseSocialNetworkDto } from '../model/responseSocialNetworkDto';
import { UpdateSocialNetworkDto } from '../model/updateSocialNetworkDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SocialNetworksService {

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
    public socialNetworksControllerCreate(body: CreateSocialNetworkDto, observe?: 'body', reportProgress?: boolean): Observable<ResponseSocialNetworkDto>;
    public socialNetworksControllerCreate(body: CreateSocialNetworkDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseSocialNetworkDto>>;
    public socialNetworksControllerCreate(body: CreateSocialNetworkDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseSocialNetworkDto>>;
    public socialNetworksControllerCreate(body: CreateSocialNetworkDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling socialNetworksControllerCreate.');
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

        return this.httpClient.request<ResponseSocialNetworkDto>('post',`${this.basePath}/social-networks`,
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
    public socialNetworksControllerFindAll(observe?: 'body', reportProgress?: boolean): Observable<Array<ResponseSocialNetworkDto>>;
    public socialNetworksControllerFindAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ResponseSocialNetworkDto>>>;
    public socialNetworksControllerFindAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ResponseSocialNetworkDto>>>;
    public socialNetworksControllerFindAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<ResponseSocialNetworkDto>>('get',`${this.basePath}/social-networks`,
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
    public socialNetworksControllerFindOne(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseSocialNetworkDto>;
    public socialNetworksControllerFindOne(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseSocialNetworkDto>>;
    public socialNetworksControllerFindOne(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseSocialNetworkDto>>;
    public socialNetworksControllerFindOne(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling socialNetworksControllerFindOne.');
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

        return this.httpClient.request<ResponseSocialNetworkDto>('get',`${this.basePath}/social-networks/${encodeURIComponent(String(id))}`,
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
    public socialNetworksControllerRemove(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseSocialNetworkDto>;
    public socialNetworksControllerRemove(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseSocialNetworkDto>>;
    public socialNetworksControllerRemove(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseSocialNetworkDto>>;
    public socialNetworksControllerRemove(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling socialNetworksControllerRemove.');
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

        return this.httpClient.request<ResponseSocialNetworkDto>('delete',`${this.basePath}/social-networks/${encodeURIComponent(String(id))}`,
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
    public socialNetworksControllerUpdate(body: UpdateSocialNetworkDto, id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseSocialNetworkDto>;
    public socialNetworksControllerUpdate(body: UpdateSocialNetworkDto, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseSocialNetworkDto>>;
    public socialNetworksControllerUpdate(body: UpdateSocialNetworkDto, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseSocialNetworkDto>>;
    public socialNetworksControllerUpdate(body: UpdateSocialNetworkDto, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling socialNetworksControllerUpdate.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling socialNetworksControllerUpdate.');
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

        return this.httpClient.request<ResponseSocialNetworkDto>('patch',`${this.basePath}/social-networks/${encodeURIComponent(String(id))}`,
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