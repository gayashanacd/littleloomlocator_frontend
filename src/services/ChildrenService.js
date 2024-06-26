import http from "@/common/http-common.js"

class ChildrenService{

    get(id) {
        return http.get(`/children/${id}`);
    }

    create(data){
        return http.post("/children", data);
    }

    update(id, data){
        return http.put(`/children/${id}`, data);
    }

    delete(id){
        return http.delete(`/children/${id}`);
      }


}

export default new ChildrenService();