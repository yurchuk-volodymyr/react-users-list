import axios from "axios";

const apiRequest = async (method, url, fields, config) => (await axios({ method, url, ...{[method === "get" ? "params" : "data"]: fields}, ...config })).data;

const get = (url, request, config) => apiRequest("get", url, request, config);
const post = (url, request, config) => apiRequest("post", url, request, config);
const put = (url, request, config) => apiRequest("put", url, request, config);
const patch = (url, request) =>  apiRequest("patch", url, request);
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

const API = {
	get,
	post,
	put,
	patch,
	delete: deleteRequest
};

export default API;
