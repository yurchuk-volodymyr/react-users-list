import Api from "./api.js";

export const getUsers = (params: any) => Api.get(`/`, params);
export const deleteUser = (id: string) => Api.delete(`/remove-user/${id}`);