
// 获取昨天今天日期，如：2017-04-19,2017-04-20
function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1);
	// month=month>=10?month:'0'+month;
  const day = now.getDate();
	// day=day>=10?day:'0'+day;
  const time1 = `${year}-${month}-${day - 1}`;
  const time2 = `${year}-${month}-${day}`;
  return `${time1},${time2}`;
}
// 时间格式，补0。如：2017-4-12=>2017-04-12
function changeTime(time) {
	// 两个时间，如2017-4-12,2017-1-2
  if (!time) { return; }
  if (time.indexOf(',') > -1) {
    const arr = time.split(',');
    const time1 = changeTime(arr[0]);
    const time2 = changeTime(arr[1]);
    return `${time1},${time2}`;
  }
  const arr =	time.split('-');
  arr[1] = arr[1] >= 10 ? arr[1] : `0${arr[1]}`;
  arr[2] = arr[2] >= 10 ? arr[2] : `0${arr[2]}`;
  return arr.join('-');
}


export default {getTime, changeTime};

