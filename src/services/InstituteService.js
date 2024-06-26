import http from "@/common/http-common.js"

class InstituteService{
  search(params){
    return http.get(`/institutes?name=${params.name}&province=${params.province}&city=${params.city}&ageGroup=${params.ageGroup}`);
  }

  getInstituteByUserId(id){
    return http.get(`/users/${id}/institute`);
  }

  create(data){
    return http.post("/institutes", data);
  }

  get(id) {
      return http.get(`/institutes/${id}`);
  }

  update(data){
    return http.put(`/institutes/${data.id}`, data);
  }

}

export default new InstituteService();