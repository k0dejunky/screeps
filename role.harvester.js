var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }

        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                var counter = 0;
                if(creep.transfer(targets[counter], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    if(targets[counter].energy < targets[counter].energyCapacity){
                        creep.moveTo(targets[counter]);
                    }else{
                        counter++;
                        creep.moveTo(targets[counter]);
                    }
                }
            }
        }
	}
};

module.exports = roleHarvester;