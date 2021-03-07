import http from "./httpService";
const apiEndpoint = "http://localhost:3000/api/upload";
export function upload(file, config) {
  return http.post(apiEndpoint, file, config);
}
