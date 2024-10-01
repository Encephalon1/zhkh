import axios from "axios";

const url = 'http://127.0.0.1:8000/api/'

export default class AnnouncementService{
    constructor(){}

    getAnnouncement(pk) {
        const urlGet = `${url}/${pk}`;
        return axios.get(urlGet).then(response => response.data);
    }

    createAnnouncement(announcement) {
        return axios.post(url, announcement);
    }

    updateAnnouncement(announcement) {
        const urlUpdate = `${url}/${announcement.pk}`;
        return axios.put(urlUpdate, announcement);
    }

    deleteAnnouncement(announcement) {
        const urlDelete = `${url}/${announcement.pk}`;
        return axios.delete(urlDelete)
    }
}