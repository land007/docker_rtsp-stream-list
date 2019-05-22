FROM land007/node-ffmpeg:latest

MAINTAINER Yiqiu Jia <yiqiujia@hotmail.com>

RUN . $HOME/.nvm/nvm.sh && cd / && npm install rtsp-stream-list
ADD websocket-relay.js /node_/main.js
ADD static /node_/static
EXPOSE 18081/tcp 18082/tcp 18083/tcp
ENV RTSPS=""


#docker kill rtsp-stream-list; docker rm rtsp-stream-list; docker run --restart always -it --privileged -e "RTSPS=rtsp://admin:abcd1234@192.168.0.234:554/cam/realmonitor?channel=1&subtype=0|rtsp://admin:Admin123@192.168.0.241:554/ISAPI/streaming/channels/103|rtsp://admin:admin@192.168.0.27:554/video0" -p 18081:18081 -p 18082:18082 -p 18083:18083 --name rtsp-stream-list land007/rtsp-stream-list:latest
