import {apiGetByLocation,baseApiUrl,herokuAnywhere,header} from './yelp-api.js'

export function GetBusinessesByLocationAndTerm() {
    return fetch(herokuAnywhere + '/' + baseApiUrl + '/' + apiGetByLocation, {
       method: 'get',
       headers:header
     })
     .then(response => response.json())
 }
 
export function GetCityAddressById(businessId) {
  return fetch(herokuAnywhere + '/' + baseApiUrl + '/' + businessId, {
       method: 'get',
       headers: header
     })
     .then(response => response.json())
 }
 
export function GetReviewAndUserNameById(businessId) {
  return fetch(herokuAnywhere + '/' + baseApiUrl + '/' + businessId + '/' + 'reviews', {
     method: 'get',
     headers: header
   })
   .then(response => response.json())
 }