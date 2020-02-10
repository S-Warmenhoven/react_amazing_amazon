import { baseUrl } from "../config";

export const Product = {
    // Fetch all Products
    all() {
      return fetch(`${baseUrl}/products`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Fetch a single Product
    one(id) {
      return fetch(`${baseUrl}/products/${id}`, {
        credentials: "include"
      }).then(res => res.json());
    },
    // Create a Product
    create(params) {
      // params is an object that represents a Product
      // { title: "qTitle", body: "qBody" }
      return fetch(`${baseUrl}/products`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Update a Product
    update(id, params) {
      return fetch(`${baseUrl}/products/${id}`, {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
      }).then(res => res.json());
    },
    // Delete
    destroy(id) {
      return fetch(`${baseUrl}/products/${id}`, {
        method: "DELETE",
        credentials: "include"
      }).then(res => res.json());
    }
  };