module RongIMLib {
    // //消息基类
    // export class RongIMMessage {
    //     msgType: string = "unknown";
    //     message: any;
    //     receiveTime: any;
    //     converType: number;
    //     msgDirection: number;
    //     msgId: string;
    //     objName: string;
    //     receivedStatus: any;
    //     sendUserId: string;
    //     sentStatus: any;
    //     sentTime: any;
    //     targetId: string;
    //     pushContent: any;
    //     constructor(message: any) {
    //         this.message = message || {};
    //     }
    //     getPushContent(): any {
    //         return this.pushContent;
    //     }
    //     getDetail(): any {
    //         return this.message;
    //     }
    //     getMessageTag(): any {
    //         return [MessageTag[1], MessageTag[2]];
    //     }
    //     getContent(): any {
    //         return this.message.content;
    //     }
    //     getConversationType(): number {
    //         return this.converType;
    //     }
    //     getExtra(): string {
    //         return this.message.extra;
    //     }
    //     getMessageDirection(): any {
    //         return this.msgDirection;
    //     }
    //     getMessageId(): string {
    //         return this.msgId;
    //     }
    //     getObjectName(): string {
    //         return this.objName;
    //     }
    //     getReceivedStatus(): any {
    //         return this.receivedStatus;
    //     }
    //     getReceivedTime(): any {
    //         return this.receiveTime;
    //     }
    //     getSenderUserId(): string {
    //         return this.sendUserId;
    //     }
    //     getSentStatus(): any {
    //         return this.sentStatus;
    //     }
    //     getTargetId(): string {
    //         return this.targetId;
    //     }
    //     getMessageType(): any {
    //         return this.msgType;
    //     }
    //     getSentTime(): any {
    //         return this.sentTime;
    //     }
    //     setPushContent(pushContent: any) {
    //         this.pushContent = pushContent;
    //     };
    //     setContent(c: any, d: any) {
    //         this.message[d || "content"] = c;
    //     };
    //     setConversationType(c: number) {
    //         this.converType = c;
    //     };
    //     setExtra(c: string) {
    //         this.message.extra = c;
    //     };
    //     setMessageDirection(c: any) {
    //         this.msgDirection = c;
    //     };
    //     setMessageId(msgId: string) {
    //         this.msgId = msgId;
    //     };
    //     setObjectName(objName: string) {
    //         this.objName = objName;
    //     };
    //     setReceivedStatus(status: any) {
    //         this.receivedStatus = status;
    //     };
    //     setSenderUserId(userId: string) {
    //         this.sendUserId = userId;
    //     };
    //     setSentStatus(status: any) {
    //         return !!(this.sentStatus = status)
    //     };
    //     setSentTime(sentTime: any) {
    //         this.sentTime = MessageUtil.int64ToTimestamp(sentTime);
    //     };
    //     setTargetId(targetId: string) {
    //         this.targetId = targetId;
    //     };
    //     setReceivedTime(receiveTime: any) {
    //         this.receiveTime = receiveTime;
    //     };
    //     setMessageType(msgType: any) {
    //         this.msgType = msgType;
    //     }
    //     toJSONString(): any {
    //         var c = {
    //             "receivedTime": this.receiveTime,
    //             "messageType": this.msgType,
    //             "details": this.message,
    //             "conversationType": this.converType,
    //             "direction": this.msgDirection,
    //             "messageId": this.msgId,
    //             "objectName": this.objName,
    //             "senderUserId": this.sendUserId,
    //             "sendTime": this.sentTime,
    //             "targetId": this.targetId
    //         };
    //         return JSON.stringify(c)
    //     }
    //     encode() {
    //         var c = new Modules.UpStreamMessage();
    //         c.setSessionId(3);
    //         c.setClassname(this.getObjectName());
    //         c.setContent(JSON.stringify(this.getDetail()));
    //         var val = c.toArrayBuffer();
    //         if (Object.prototype.toString.call(val) == "[object ArrayBuffer]") {
    //             return [].slice.call(new Int8Array(val))
    //         }
    //         return val
    //     }
    // }
    export class InformationNotificationMessage implements UserInfoAttachedMessage, ExtraAttachedMessage {
        userInfo: UserInfo;
        message: InformationNotificationMessage;
        content: string;
        extra: string;
        constructor(message: any) {
            this.message = message;
        }
        static obtain(content: string): InformationNotificationMessage {
            var msg = new InformationNotificationMessage({ content: content, extra: "" });
            return msg;
        }
        getExtra(): string {
            return this.message.extra;
        }

        getMessage(): string {
            return this.message.content;
        }

        setExtra(extra: string) {
            this.message.extra = extra;
        }

        setMessage(content: string) {
            this.message.content;
        }

        encode() {
            var c = new Modules.UpStreamMessage();
            c.setSessionId(3);
            c.setClassname("RC:InfoNtf");
            c.setContent(JSON.stringify(this.message));
            var val = c.toArrayBuffer();
            if (Object.prototype.toString.call(val) == "[object ArrayBuffer]") {
                return [].slice.call(new Int8Array(val));
            }
            return val;
        }
    }
    export class ContactNotificationMessage implements NotificationMessage, UserInfoAttachedMessage {
        public userInfo: UserInfo;
        message: ContactNotificationMessage;
        extra: string;
        content: string;
        operation: string;
        sourceUserId: string;
        targetUserId: string;
        static CONTACT_OPERATION_ACCEPT_RESPONSE: string = "ContactOperationAcceptResponse";
        static CONTACT_OPERATION_REJECT_RESPONSE: string = "ContactOperationRejectResponse";
        static CONTACT_OPERATION_REQUEST: string = "ContactOperationRequest";
        constructor(message: any) {
            this.message = message;
        }
        static obtain(operation: string, sourceUserId: string, targetUserId: string, message: string): InformationNotificationMessage {
            return new InformationNotificationMessage({ operation: operation, sourceUserId: sourceUserId, targetUserId: targetUserId, message: message, extra: "" });
        }

        getExtra(): string {
            return this.message.extra;
        }

        getMessage(): string {
            return this.message.content;
        }

        getOperation(): string {
            return this.message.operation;
        }

        getSourceUserId(): string {
            return this.message.sourceUserId;
        }

        getTargetUserId(): string {
            return this.message.targetUserId;
        }

        setExtra(extra: string) {
            this.message.extra = extra;
        }

        setMessage(content: string) {
            this.message.content;
        }

        setOperation(operation: string) {
            this.message.operation = operation;
        }

        setSourceUserId(sourceUserId: string) {
            this.message.sourceUserId = sourceUserId;
        }

        setTargetUserId(targetUserId: string) {
            this.message.targetUserId = targetUserId;
        }

        encode() {
            var c = new Modules.UpStreamMessage();
            c.setSessionId(3);
            c.setClassname("RC:ContactNtf");
            c.setContent(JSON.stringify(this.message));
            var val = c.toArrayBuffer();
            if (Object.prototype.toString.call(val) == "[object ArrayBuffer]") {
                return [].slice.call(new Int8Array(val));
            }
            return val;
        }
    }
    export class ProfileNotificationMessage implements MessageContent, NotificationMessage, UserInfoAttachedMessage {
        message: ProfileNotificationMessage;
        userInfo: UserInfo;
        extra: string;
        content: string;
        operation: string;
        constructor(message: any) {
            this.message = message;
        }
        static obtain(operation: string, data: string): ProfileNotificationMessage {
            return new ProfileNotificationMessage({ operation: operation, data: data, extra: "" });
        }
        getData(): string {
            return this.message.content;
        }

        getExtra(): string {
            return this.message.extra;
        }

        getOperation(): string {
            return this.message.operation;
        }

        setData(content: string) {
            return this.message.content = content;
        }

        setExtra(extra: string) {
            return this.message.extra = extra;
        }

        setOperation(operation: string) {
            return this.message.operation = operation;
        }

        encode() {
            var c = new Modules.UpStreamMessage();
            c.setSessionId(3);
            c.setClassname("RC:ProfileNtf");
            c.setContent(JSON.stringify(this.message));
            var val = c.toArrayBuffer();
            if (Object.prototype.toString.call(val) == "[object ArrayBuffer]") {
                return [].slice.call(new Int8Array(val));
            }
            return val;
        }
    }
    export class CommandNotificationMessage implements MessageContent, NotificationMessage, UserInfoAttachedMessage {
        message: CommandNotificationMessage;
        userInfo: UserInfo;
        extra: string;
        content: string;
        name: string;

        constructor(message: any) {
            this.message = message;
        }

        static obtain(x: string, data: string): CommandNotificationMessage {
            return new CommandNotificationMessage({ name: x, data: data, extra: "" });
        }

        getData(): string {
            return this.message.content;
        }

        getName(): string {
            return this.message.name;
        }

        setData(content: string) {
            return this.message.content = content;
        }

        setName(name: string) {
            return this.message.name = name;
        }

        encode() {
            var c = new Modules.UpStreamMessage();
            c.setSessionId(3);
            c.setClassname("RC:CmdNtf");
            c.setContent(JSON.stringify(this.message));
            var val = c.toArrayBuffer();
            if (Object.prototype.toString.call(val) == "[object ArrayBuffer]") {
                return [].slice.call(new Int8Array(val));
            }
            return val;
        }
    }
    export class DiscussionNotificationMessage implements MessageContent, NotificationMessage, UserInfoAttachedMessage {
        message: DiscussionNotificationMessage;
        userInfo: UserInfo;
        extra: string;
        extension: string;
        type: string;
        isHasReceived: boolean = false;
        operation: string;
        constructor(message: any) {
            this.message = message;
        }

        getExtension(): string {
            return this.message.extension;
        }

        getType(): string {
            return this.message.type;
        }

        getHasReceived(): boolean {
            return this.message.isHasReceived;
        }

        getOperator(): string {
            return this.message.operation;
        }
        setExtension(extension: string) {
            return this.message.extension = extension;
        }

        setHasReceived(isHasReceived: boolean) {
            return this.message.isHasReceived = isHasReceived;
        }

        setOperator(operation: string) {
            return this.message.operation = operation;
        }

        setType(type: string) {
            return this.message.type = type;
        }

        encode() {
            var c = new Modules.UpStreamMessage();
            c.setSessionId(3);
            c.setClassname("RC:DizNtf");
            c.setContent(JSON.stringify(this.message));
            var val = c.toArrayBuffer();
            if (Object.prototype.toString.call(val) == "[object ArrayBuffer]") {
                return [].slice.call(new Int8Array(val));
            }
            return val;
        }
    }

}
