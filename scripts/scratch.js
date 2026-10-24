/**
 * Macro script template
*/
const optionName = "Precision";
const version = "14.5.0";

try {
	if (args[0].macroPass === "postActiveEffects") {
	}

} catch (err) {
	console.error(`${optionName}: ${version}`, err);
}

console.info("%c fvtt-trazzm-homebrew-5e", "color: #D030DE", " | Bag of Tricks (Gray)");
ui.notifications.error(`${optionName}: ${version} - missing Font of Magic`);
ChatMessage.create({
	content: `${targetToken.name} is stuck in the webs`,
	speaker: ChatMessage.getSpeaker({actor: originActor})
});

<section class="secret">
	<p><strong>Foundry Note</strong></p>
	<p>This feature includes an Active Effect which automatically increases your walking Speed but does not automate the
		Advantage.</p>
</section>

const _flagGroup = "fvtt-trazzm-homebrew-5e";
const _flagName = "mastery-vex-target";
let flag = actor.getFlag(_flagGroup, _flagName);
await actor.setFlag(_flagGroup, _flagName, target.actor.uuid);
await actor.unsetFlag(_flagGroup, _flagName);
