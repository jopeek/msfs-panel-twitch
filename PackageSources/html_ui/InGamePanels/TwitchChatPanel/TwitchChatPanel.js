// class IngamePanelTwitchChatPanel extends TemplateElement {
//     constructor() {
//         super(...arguments);
//     }
//     connectedCallback() {
//         super.connectedCallback();
//         // js code goes here


//     }
//     initialize() {
//     }
//     disconnectedCallback() {
//         super.disconnectedCallback();
//     }
//     updateImage() {
//     }
// }
// window.customElements.define("ingamepanel-custom", IngamePanelTwitchChatPanel);
// checkAutoload();

function formatEmotes(text, emotes) {
    var splitText = text.split('');
    for(var i in emotes) {
        var e = emotes[i];
        for(var j in e) {
            var mote = e[j];
            if(typeof mote == 'string') {
                mote = mote.split('-');
                mote = [parseInt(mote[0]), parseInt(mote[1])];
                var length =  mote[1] - mote[0],
                    empty = Array.apply(null, new Array(length + 1)).map(function() { return '' });
                splitText = splitText.slice(0, mote[0]).concat(empty).concat(splitText.slice(mote[1] + 1, splitText.length));
                splitText.splice(mote[0], 1, '<img class="emoticon" src="http://static-cdn.jtvnw.net/emoticons/v1/' + i + '/3.0">');
            }
        }
    }
    return splitText.join('');
}

function formatBadges(badges) {
    if (badges === null) return "";

    if (badges['premium'] !== null) {
        if (badges['premium'] === "1") return '<img class="premium" src="https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1">';
    }

    if (badges['moderator'] !== null ) {
        if (badges['moderator'] === "1") return '<img class="mod" src="https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1">';
    }

    return "";
}

$(function () {
    console.log("ready!");

    const client = new tmi.Client({
        options: {
            debug: true,
            messagesLogLevel: "info"
        },
        connection: {
            reconnect: true,
            secure: true
        },
        // identity: {
        // 	username: 'bot-name',
        // 	password: 'oauth:my-bot-token'
        // },
        channels: ['gladd']
    });
    client.connect().catch(console.error);
    client.on('message', (channel, tags, message, self) => {
        console.log(tags);
        
        $('#TwitchChatPanelList').prepend(`<li><span style="font-weight: bold; color: ${tags['color']};">` + formatBadges(tags['badges']) + `${tags['display-name']}</span>: ` + formatEmotes(message, tags['emotes']) + '</li>');

        $('#TwitchChatPanelList li:gt(25)').remove();


    });


});