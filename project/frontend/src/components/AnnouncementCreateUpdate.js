import  React, { Component } from  'react';
import AnnouncementService from './AnnouncementService'

const announcementService = new AnnouncementService();

class AnnouncementCreateUpdate extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //componentDidMount(){
     //   const { match: {params} } = this.props;
      //  if(params && params.pk) {
       //     announcementService.getAnnouncement(params.pk).then((a)=>{
      //          this.refs.title.value = a.title;
       //         this.refs.text.value = a.text;
      //      })
     //  }
   // }

    handleCreate(){
        announcementService.createAnnouncement(
            {
            "title": this.refs.title.value,
            "text": this.refs.text.value
            }).then((result)=>{
                alert("Announcement created!");
            }).catch(()=>{
                alert("There was an error! Please re-check your form.");
            });
    }

    handleUpdate(pk){
        announcementService.updateAnnouncement(
            {
            "pk": pk,
            "title": this.refs.title.value,
            "text": this.refs.text.value
            }).then((result)=>{
                alert("Announcement created!");
            }).catch(()=>{
                alert("There was an error! Please re-check your form.");
            });
    }

    handleSubmit(event) {
        //const { match: { params } } = this.props;
        //if(params && params.pk){
         //   this.handleUpdate(params.pk);
        //}
       // else {
            this.handleCreate();
       // }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input className="form-control" type="text" ref="title" />
              <label>Text:</label>
              <input className="form-control" type="text" ref="text" />

              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
            </form>
        );
    }
}

export default AnnouncementCreateUpdate;