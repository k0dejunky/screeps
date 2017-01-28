var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


module.exports.loop = function () {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'Harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'Upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'Builder') {
            roleBuilder.run(creep);
        }
    }
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'Harvester');
    console.log('Harvesters: ' + harvesters.length);
    if (harvesters < 2){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'Harvester'});
        console.log('Spawning new Harvester: ' + newName);
        Game.creep[newName].memory.role = 'Harvester';
    }
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == "Upgrader");
    console.log('Upgraders: ' + upgraders.length);
    if (upgraders < 2){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'Upgrader'});
        console.log('Spawning new Upgrader: ' + newName);
        Game.creep[newName].memory.role = 'Upgrader';
    
    }
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == "Builder");
    console.log('Builders: ' + builders.length);
    if (upgraders < 2){
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'Builder'});
        console.log('Spawning new Builder: ' + newName);
        Game.creep[newName].memory.role = 'Builder';
    }

    
}