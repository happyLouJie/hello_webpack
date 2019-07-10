import css from './app.scss';
import VideoPlatApi from './iot/PlatVideoApi'
console.info("hello webpack");
// const api = new VideoPlatApi();
// api.getPlayAddress();
function hello() {
    console.log("hello world");
}

var he = 1;
// export {hello,he};
// export default VideoPlatApi;
module.exports=VideoPlatApi;
// module.exports = require('./iot/PlatVideoApi').default;
// export default VideoPlatApi