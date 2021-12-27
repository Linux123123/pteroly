import req from "../../ClientRequest";

/**
 * @param {String} serverId ID of the server to kill
 */
function killServer(serverId: string) {
	const Req = new req(process.env.CLIENT_NODEACTYL_HOST, process.env.CLIENT_NODEACTYL_KEY);
	const data = { 'signal': 'kill' };
	return Req.postRequest('KillServer', data, serverId);
}

export default killServer;