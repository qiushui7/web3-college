/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AppService {
  /**
   * @returns any
   * @throws ApiError
   */
  public static appControllerGetHello(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api',
    });
  }
  /**
   * @returns any
   * @throws ApiError
   */
  public static appControllerGetHello2V2(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v2',
    });
  }
}
