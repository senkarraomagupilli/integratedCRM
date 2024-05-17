

import axios from "axios"
import { baseurl } from "./Baseurls";
 
const Authdetails = localStorage.getItem("authUser")
const token = Authdetails || "";

// Auth Api 
// add function
export const addAuthData = (url, data) => {
  return axios.post(baseurl + url, data, {
      headers: { Authorization: `Bearer ${""}` },
    })
  }
  
  // update function
  export const updateAuthData = (url, data) => {
    return axios.put(baseurl + url, data, {
      headers: { Authorization: `Bearer ${""}` },
    })
  }


// get function
export const getAllData = (url) => {
  return axios.get(baseurl + url, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// add function
export const addData = (url, data) => {
return axios.post(baseurl + url, data, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

// update function
export const updateData = (url, data) => {
  return axios.put(baseurl + url, data, {
    headers: { Authorization: `Bearer ${token}` },
  })
}
// delete function
export const deletedData = (url) => {
  return axios.delete(baseurl + url, {
    headers: { Authorization: `Bearer ${token}` },
  })
}