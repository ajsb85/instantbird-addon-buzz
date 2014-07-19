Components.utils.import("resource:///modules/imServices.jsm");
function letsbuzz() { 
	let conv = getBrowser().selectedConversation._conv;
	var conversationProtocol2 = getBrowser().selectedConversation._conv.account.protocol.id;
	if (conversationProtocol2 == "prpl-yahoo") {
		Services.cmd.executeCommand("/buzz", conv.target);
    }
    if (conversationProtocol == "prpl-msn") {
        Services.cmd.executeCommand("/nudge", conv.target);
	}

}


