import { CLASSES } from "../util/types";

const buildDescription = (class_: CLASSES) => {
  return `**${class_.name}**: ${class_.description}
default-skill: ${class_.defaultSkill.name} - ${class_.defaultSkill.description}
health: ${class_.health}
mana: ${class_.mana}
physical-damage: ${class_.physicalDamage}
magical-damage: ${class_.magicalDamage}
spiritual-damage: ${class_.spiritualDamage}
critical-chance: ${class_.criticalChance}%
critical-multiplier: ${class_.criticalMultiplier}x`;
};

export default { buildDescription };
