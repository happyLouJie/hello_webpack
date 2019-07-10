import axios from 'axios';
import VideoPlatApiUri from './VideoPlatApiUri';

/**
 * 注意跨域问题
 */
export default class PlatVideoApi {
    constructor(host, apiKey, options){
        this.host = host;
        this.apiKey = apiKey;
        this.options = {};
        if (typeof options !== "undefined") {
            //TODO: options 暂时未使用
        }
        this.httpClient = axios.create({
            baseURL: this.host,
            timeout: 5000,
            headers: {
                "api-key": this.apiKey,
            }
        });
        console.log(VideoPlatApiUri.GET_VIDEO_LIST);
    }

    /**
     * 直播地址获取
     * deviceId 设备id
     * channeId 通道id
     * protocolType 播放协议类型 0:rtmp 1:hls 2:https-hls
     * options 暂时未使用 {}
     */
    getLivePlayAddress(deviceId, channelId, protocol_type, options){
        console.log("video-api");
        this.httpClient.get(VideoPlatApiUri.LIVE_PLAY_ADDRESS,{
            params:{
                device_id: deviceId,
                channel_id: channelId,
                protocol_type: protocol_type,
            }
        }).then(function (respose) {
            console.log(respose);
        }).catch(function (error) {
            console.log(error);
        }).then(function () {
            console.log("done");
        });
    }

    /**
     *
     * @param deviceId 设备id
     * @param channelId 通道id
     */
    getLivePreview(deviceId, channelId) {

    }

    getVideoInfo(options){

    }

    getvideoList(options) {

    }


    testDemo(){
        axios.get("https://github.com",{
            params:{},
            headers:{"Content-Type":'application/json'}
        }).then(function (respose) {
            console.log(respose);
        }).catch(function (error) {
            console.log(error);
        }).then(function () {
            console.log("done");
        });
    }

}