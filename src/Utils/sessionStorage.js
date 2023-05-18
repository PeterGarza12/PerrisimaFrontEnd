export const updateSessionStorageUser = (value) => {
  let prevData = JSON.parse(sessionStorage.getItem('user'));
  Object.keys(value).forEach(function(val, key){
       prevData[val] = value[val];
  })
  sessionStorage.setItem('user', JSON.stringify(prevData));
};