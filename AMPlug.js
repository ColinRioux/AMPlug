/*
 *  Original File by : Colin Rioux 
 *  Remodeled file
 *
 */

var message = "[ AMPlug ]: Plugin now enabled!\n Type '/am' for a list of commands.";

startup();

function startup() {
    API.chatLog(message);
}

API.on(API.CHAT, handle);

function handle(value) {
   
    if (value == "/am") {
        API.chatLog("Test");
    }

}
