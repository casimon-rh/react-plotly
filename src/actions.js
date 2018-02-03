import xhr from 'xhr';
export function changeLocation(location) {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
}
export function setData(data) {
  return {
    type: 'SET_DATA',
    data: data
  };
}
export function getData(url) {
  return (dispatch) => {
    xhr({
      url: url
    }, (err, data) => {
      var body = JSON.parse(data.body);
      dispatch(setData({
        data: body,
      }))
    });
  }
}