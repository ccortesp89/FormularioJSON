var form = new FormData();
form.append("client_id", "3MVG94DzwlYDSHS72DqXoZJ4w4ugp0WJFT6xYRhun9EGl2B6LmKRmQvCE86uEi91qyUK6LbVQ_U4v65f2w56S");
form.append("grant_type", "password");
form.append("client_secret", "B6BF02C41B28F24E10314FF0704D3D346811287D110D7A80EC67746C18EC6651");
form.append("username", "consultor@cuatroi.com.pilotos");
form.append("password", "Prtk1945rK7ayGFpWEfLaz15Es5gJ0Kdq");

var settings = {
  "url": "https://test.salesforce.com/services/oauth2/token",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Cookie": "BrowserId=0xV1e6SlEeuaNK86jUosIA"
  },
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});