import {GetBusinessesByLocationAndTerm,GetCityAddressById,GetReviewAndUserNameById} from './requests.js'

const BusinessesLocationAndId = await GetBusinessesByLocationAndTerm();

const Businesses = BusinessesLocationAndId.businesses.map(business => {
  return {
    name: business.name,
    id: business.id
  }
});

const BusinessesId = Businesses.map(business => {
  return business.id
}); 

const BusinessesName = Businesses.map(business => {
  return business.name
}); 

let Addresses = []

for (let i = 0; i < 5; i++)
{
  Addresses[i] = await GetCityAddressById(BusinessesId[i])
}

const AddressesCity = Addresses.map(address => {
  return address.location.city
}); 

const AddressesStreet = Addresses.map(address => {
  return address.location.address1
});

let Reviews = []

for (let i = 0; i < 5; i++)
{
  Reviews[i] = await GetReviewAndUserNameById(BusinessesId[i])
}

const ReviewsText = Reviews.map(review => {
  return review.reviews[0].text
}); 

const ReviewerRating = Reviews.map(review => {
  return review[0].rating
});

const ReviewerUserName = Reviews.map(review => {
  return review[0].user.name  
});

for (i = 0; i < 5; i++)
{
  console.log('Business Name: ' + BusinessesName[i])
  console.log('Bunisess Address: ' + AddressesStreet[i] + ',' + AddressesCity[i])
  console.log('Review: ' + ReviewsText[i])
  console.log('Rating: ' + ReviewerRating[i])
  console.log('User Review Name: ' + ReviewerUserName[i])
}

