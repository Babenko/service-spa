import EmberUploader from 'ember-uploader';
import Ember from 'ember';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('url'),
      paramName: "uploadfile"
    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]).then(data => {
        console.log(this.get("img"), data)
      }, error => {
        // Handle failure
      });
    }

    uploader.on('didUpload', response => {
      console.log("did", response);
      console.log(this.get("img"))
      this.set("img", response);
    });
  }
});
