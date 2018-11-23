import {
  GET_OFFERS_SUCCESS,
  GET_OFFERS,
  GET_OFFERS_FAILURE
} from "../actionTypes/offer";

export function getOffersAction() {
  return { type: GET_OFFERS };
}

export function getOffersSuccessAction(offers) {
  return { type: GET_OFFERS_SUCCESS, offers };
}

export function getOffersFailureAction(error) {
  return { type: GET_OFFERS_FAILURE, error };
}
