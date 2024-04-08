import http from "../http-common";

class TutorialDataService {
    getAll() {
        return http.get("/posts");
    }

    get(id) {
        return http.get(`/posts/${id}`);
    }

    create(data) {
        return http.post("/posts", data);
    }

    update(id, data) {
        return http.put(`/posts/${id}`, data);
    }

    delete(id) {
        return http.delete(`/posts/${id}`);
    }

    deleteAll() {
        return http.delete(`/posts`);
    }

    findByTitle(title) {
        return http.get(`/posts?title=${title}`);
    }
}

class coursesDataServiece {
    getAll() {
        return http.get("/course");
    }

    get(id) {
        return http.get(`/course/${id}`);
    }

    create(data) {
        return http.post("/course", data);
    }

    update(id, data) {
        return http.put(`/course/${id}`, data);
    }

    delete(id) {
        return http.delete(`/course/${id}`);
    }

    deleteAll() {
        return http.delete(`/course`);
    }

    findByTitle(title) {
        return http.get(`/course?title=${title}`);
    }
}


export const TWA = new TutorialDataService();
export const TWA2 = new coursesDataServiece();
